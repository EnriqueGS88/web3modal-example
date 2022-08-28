# Simple Modal to connect multiple wallets

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Polyfill fixed

Since the latest webpack update, polyfills need to be fixed manually.

The fix was found in this article by [Alchemy](https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5) and in this [thread](https://github.com/react-dnd/react-dnd/issues/3425) 

1 - Install react-app-rewired

2 - Install missing dependencies
-- crypto-browserify
-- stream-browserify
-- assert
-- stream-http
-- https-browserify
-- os-browserify
-- url

3 - Create new file *config-overrides.js* in root directory and insert this snippet:
```sh
const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
        "stream": require.resolve("stream-browserify"), 
        "assert": require.resolve("assert"), 
        "http": require.resolve("stream-http"), 
        "https": require.resolve("https-browserify"), 
        "os": require.resolve("os-browserify"), 
        "url": require.resolve("url"),
        "process/browser": require.resolve("process/browser") 
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }
```

4 - Replace "react-scripts" with "react-app-rewired" in package.json
 
```json
"scripts": { 
	"start": "react-app-rewired start", 
  "build": "react-app-rewired build", 
  "test": "react-app-rewired test", 
  "eject": "react-scripts eject" 
 },
 ```
