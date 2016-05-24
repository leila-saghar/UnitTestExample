module.exports = function (grunt) {

    var appConfig = {
        mainLoc: 'app/main',
        mainConcatFile: 'buildConcat'
    };

    grunt.initConfig({
        appSetting: appConfig,
        wiredep: {
            task: {
                src: ['index.html'],
                overrides: {
                    bootstrap: {
                        main: [
                            "dist/css/bootstrap.min.css",
                            "dist/js/bootstrap.min.js"
                        ]
                    },
                }
            }
        },

        concat: {
            options: {
                separator: ' ',
            },
            dist: {
                src: ['<%= appSetting.mainLoc %>/main-app.mdl.js', '<%= appSetting.mainLoc %>/**/*.js'],
                dest: 'app/<%= appSetting.mainConcatFile %>.js',
            },
        },

        processhtml: {
            debug: {
                options: {
                    process: false,
                    data: {
                        message: 'This is development build'
                    }
                },
                files: {
                    'index.html': ['index.tpl.html']
                }
            },
            release: {
                options: {
                    process: false,
                    data: {
                        message: 'This is a release build'
                    }
                },
                files: {
                    'index.html': ['index.tpl.html']
                }
            }
        },
        jshint: {
            options: {
                reporter: 'checkstyle',
                reporterOutput: 'app/<%= appSetting.mainLoc %>.jshint.output.xml'
            },
            // define the files to lint
            beforeconcat: ['gruntfile.js', 'bower.json', 'package.json', '<%= appSetting.mainLoc %>/**/*.js'],
            afterconcat: ['app/<%= appSetting.mainConcatFile %>.js']
        },
    });


    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint:beforeconcat', 'processhtml:debug', 'wiredep']);
    grunt.registerTask('release', ['jshint:beforeconcat', 'processhtml:release', 'concat', 'jshint:afterconcat', 'wiredep']);
};