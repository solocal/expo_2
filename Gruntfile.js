module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// builds the production-ready assets in the "public_build" directory
	grunt.registerTask("build", [
		"clean",
		"handlebars",
		"requirejs"
	]);
	
	// checks the source code for possible bugs and/or improvements
	grunt.registerTask("check", [
		"handlebars",
		"jshint"
	]);

    // compiles templates
    grunt.registerTask("templates", [
        "handlebars"
    ]);

	grunt.registerTask("server", [
		"handlebars",
		"connect"
	]);

    grunt.initConfig({
	
			// clean the public_build directory
            clean : ["public_build/"],

			// handle bars template compilation
            handlebars : {
                compile : {
                    options : {
						amd: true,
						namespace: "Handlebars.templates",
						processName: function(filePath) {
							// keep only the filename
							var pieces = filePath.split("/");
						    return pieces[pieces.length - 1];
						}
                    },
					files: {
						"public/compiled_templates.js": [
							"public/templates/*.html",
							"public/templates/_*.html"
						],
						"public_build/compiled_templates.js": [
							"public/templates/*.html",
							"public/templates/_*.html"
						]						
				    }
                }
            },

			// aggregate, minify, uglify of requirejs code
			requirejs: {
				compile: {
					options: {
					    //appDir: "./public",
					    //baseUrl: ".",
						baseUrl: "./public",
					    dir: "./public_build",
						mainConfigFile: "./public/main.js",
						modules: [{
							"name": "main"
						}],
						removeCombined: true,
						findNestedDependencies: true//,
                        //optimize: "none"
					}
				}
			},

			// jshint settings
            jshint : {
                options : {
					sub: true, // allow dot notation
					globals: {
						jQuery: true
					},
				},
				all: [
					"public/js/**/*.js"
				]
			},
			
			// watch for changes to our handlebars templates and auto-compile
            watch : {
                files : ["public/templates/**/*.html"],
                tasks : "handlebars"
            },

			// runs the test server on port 9001
            connect: {
                server: {
                    options: {
                        port: 9001,
                        base: './public',
                        keepalive : true
                    }
                }
            }		
    });

};