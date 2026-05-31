#!/usr/bin/env python3
"""
MCP Server for Web Development Tasks
Provides tools for running npm scripts and checking project status.
"""

import asyncio
import json
import os
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, List

import mcp.server.stdio
import mcp.types as types
from mcp.server.lowlevel import Server
from mcp.server.models import InitializationOptions


class WebDevMCPServer:
    def __init__(self, project_root: str):
        self.project_root = Path(project_root).resolve()
        self.allowed_npm_scripts = {"dev", "start", "build", "test", "lint"}

    async def run_npm_script(self, script_name: str) -> Dict[str, Any]:
        """Run an npm script if it's in the allowed list."""
        if script_name not in self.allowed_npm_scripts:
            return {
                "error": f"Script '{script_name}' is not allowed. Allowed scripts: {', '.join(sorted(self.allowed_npm_scripts))}"
            }

        package_json = self.project_root / "package.json"
        if not package_json.exists():
            return {"error": "package.json not found in project root"}

        try:
            # Run npm script
            result = subprocess.run(
                ["npm", "run", script_name],
                cwd=self.project_root,
                capture_output=True,
                text=True,
                timeout=60  # 60 second timeout
            )

            return {
                "script": script_name,
                "returncode": result.returncode,
                "stdout": result.stdout,
                "stderr": result.stderr,
                "success": result.returncode == 0
            }
        except subprocess.TimeoutExpired:
            return {"error": f"npm run {script_name} timed out after 60 seconds"}
        except Exception as e:
            return {"error": f"Failed to run npm script: {str(e)}"}

    async def list_files(self, directory: str = "") -> Dict[str, Any]:
        """List files in the project directory or a subdirectory."""
        target_dir = self.project_root / directory if directory else self.project_root

        # Security: ensure we don't go outside project root
        try:
            target_dir.resolve().relative_to(self.project_root.resolve())
        except ValueError:
            return {"error": "Access denied: cannot list files outside project root"}

        if not target_dir.exists():
            return {"error": f"Directory '{directory}' does not exist"}

        try:
            files = []
            for item in target_dir.iterdir():
                files.append({
                    "name": item.name,
                    "is_directory": item.is_dir(),
                    "size": item.stat().st_size if item.is_file() else None
                })

            return {
                "directory": str(target_dir.relative_to(self.project_root)),
                "files": files
            }
        except Exception as e:
            return {"error": f"Failed to list files: {str(e)}"}

    async def get_package_info(self) -> Dict[str, Any]:
        """Get information from package.json if it exists."""
        package_json = self.project_root / "package.json"
        if not package_json.exists():
            return {"error": "package.json not found"}

        try:
            with open(package_json, 'r') as f:
                data = json.load(f)

            return {
                "name": data.get("name"),
                "version": data.get("version"),
                "description": data.get("description"),
                "scripts": data.get("scripts", {}),
                "dependencies": list(data.get("dependencies", {}).keys()),
                "devDependencies": list(data.get("devDependencies", {}).keys())
            }
        except Exception as e:
            return {"error": f"Failed to read package.json: {str(e)}"}

    async def check_port(self, port: int) -> Dict[str, Any]:
        """Check if a port is in use (useful for checking if dev server is running)."""
        import socket

        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            result = sock.connect_ex(('127.0.0.1', port))
            sock.close()

            if result == 0:
                return {"port": port, "in_use": True, "message": f"Port {port} is in use"}
            else:
                return {"port": port, "in_use": False, "message": f"Port {port} is available"}
        except Exception as e:
            return {"error": f"Failed to check port {port}: {str(e)}"}


async def main():
    # Get project root from environment or use current directory
    project_root = os.environ.get("MCP_WEBDEV_PROJECT_ROOT", ".")

    server_instance = WebDevMCPServer(project_root)

    # Create the MCP server
    server = Server("webdev-assistant")

    # Register tool listing
    @server.list_tools()
    async def handle_list_tools() -> list[types.Tool]:
        return [
            types.Tool(
                name="run_npm_script",
                description="Run an npm script (limited to dev, start, build, test, lint)",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "script": {
                            "type": "string",
                            "description": "Name of the npm script to run"
                        }
                    },
                    "required": ["script"]
                }
            ),
            types.Tool(
                name="list_files",
                description="List files in the project directory or a subdirectory",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "directory": {
                            "type": "string",
                            "description": "Relative directory to list (empty for project root)"
                        }
                    }
                }
            ),
            types.Tool(
                name="get_package_info",
                description="Get information from package.json",
                inputSchema={
                    "type": "object",
                    "properties": {}
                }
            ),
            types.Tool(
                name="check_port",
                description="Check if a port is in use (e.g., to see if dev server is running)",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "port": {
                            "type": "integer",
                            "description": "Port number to check"
                        }
                    },
                    "required": ["port"]
                }
            )
        ]

    # Register tool call handler
    @server.call_tool()
    async def handle_call_tool(name: str, arguments: dict) -> list[types.TextContent | types.ImageTypes | types.EmbeddedResource]:
        if name == "run_npm_script":
            result = await server_instance.run_npm_script(arguments["script"])
            return [types.TextContent(type="text", text=json.dumps(result, indent=2))]
        elif name == "list_files":
            result = await server_instance.list_files(arguments.get("directory", ""))
            return [types.TextContent(type="text", text=json.dumps(result, indent=2))]
        elif name == "get_package_info":
            result = await server_instance.get_package_info()
            return [types.TextContent(type="text", text=json.dumps(result, indent=2))]
        elif name == "check_port":
            result = await server_instance.check_port(arguments["port"])
            return [types.TextContent(type="text", text=json.dumps(result, indent=2))]
        else:
            raise ValueError(f"Unknown tool: {name}")

    # Run the server
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="webdev-assistant",
                server_version="0.1.0",
            ),
        )


if __name__ == "__main__":
    asyncio.run(main())