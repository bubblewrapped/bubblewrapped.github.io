module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					base: '_site',
					livereload: true
				}
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['style.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		jekyll: {
			server: {
				options: {
					serve: true,
					server_port: 8000,
					no_watch: true,
					auto: true
				}
			},
			dev: {
				dest: '_site'
			}
		},
		watch: {
			sass: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
			},
			jekyll: {
				files: ['!**/scss/**', '!**/node_modules/**', '!**/_site/**', '*', '*/*'],
				tasks: ['jekyll:dev'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect', 'watch']);
};