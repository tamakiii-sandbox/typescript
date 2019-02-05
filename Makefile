
webpack-dev-server:
	trap "npx nodemon --exec 'npx webpack-dev-server --hot --inline --mode development --port 8080 --content-base public --output-public-path dist'" EXIT

