module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, Thomas Girard | http://opensource.org/licenses/MIT */\n'
            },
            my_target: {
                files: {
                    'static/js/aeris.min.js': [
                        'src_static/js/main.js'
                    ]
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['src_static/stylus'],
                    urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, Thomas Girard | http://opensource.org/licenses/MIT */\n'
                },
                files: {
                    'static/css/aeris.min.css': 'src_static/stylus/makeup.styl'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'stylus']);

};
