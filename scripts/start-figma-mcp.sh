#!/bin/bash

# Load environment variables from .env file
if [ -f "$(dirname "$0")/../.env" ]; then
  export $(cat "$(dirname "$0")/../.env" | grep -v '^#' | xargs)
fi

# Start the Figma MCP server with the environment variable
npx -y figma-developer-mcp --figma-api-key="$FIGMA_ACCESS_TOKEN" --stdio
