# Don't want to re-build/change anything
---
If you don't want to make any changes in source code, than just copy all files from 'build' directory to your web/local host.

# Ultimate Blocks - Theme Builder
---
Ultimate Blocks Builder takes a block oriented approach to building web pages and web sites. What this is means is that  Ultimate Blocks Builder provides the user with a selection of pre-designed blocks, such as headers, content sections, forms, footers, etc. which are combined onto a canvas to create fully functional web page.

# Current Version
---
2.1.2

# Build info
---
Ultimate Blocks Builder uses Webpack (https://webpack.github.io) for building and bundling the front-end code. Webpack is configured through the config file "webpack.config.js". To build the front-end, you will want to make sure all dependencies (listed in package.json) are installed first. You can do this by running the command "npm install" (this is assuming you have NPM installed already). This will create a folder named "node_modules" which contains all the dependencies. You're now ready to rebuild the front-end, you can do this by running the command "npm run build".

To be able to run the build, you'll need to have Nodejs installed. Other dependencies can be found in /package.json.

# Windows Issue
---
If you have issue with windows building just add this piece of code: "compile": "webpack --config webpack.config.js" into file package.json before line 9, and run command 'npm run compile'.