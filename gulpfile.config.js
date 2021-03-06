'use strict';

function Config () {	
	var config = this;


	// Paths
	config.path = {
		src: './src',
		dest: './build',
		
		typings: './typings'
	};
	
	
	// Third Party Libraries
	config.libs = [
		'node_modules/es6-promise/dist/es6-promise.js',
		'node_modules/whatwg-fetch/fetch.js'		
	];

    
    // Configuration Files
    config.gravel = 'gravel.config.json';
	
	
	// Typescript
	config.typescript = {
		files: [
            config.path.src + '/**/*.ts', 
            '!' + config.path.src + '/app/gravel.config.ts'
        ],
		tsd: config.path.typings + '/**/d.ts',
		tsconfig: {
			"emitDecoratorMetadata": true,
			"module": "commonjs",
			"target": "es5",
			"removeComments": true		
		}		
	};
	
	
	// Main (index.html)
	config.main = config.path.src + '/index.html';
	
	
	// Server
	config.server = {
		port: 3000
	};
}

module.exports = function () {
	return new Config();	
};