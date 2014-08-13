module.exports = function (grunt) {

    grunt.initConfig({

        compress: {
            main: {
                options: {
                    archive: 'battery-staple.zip'
                },
                files: [
                    { cwd: 'src/', src: ['**'], expand: true }
                ]
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/*.js']
        },

        watch: {
            files: ['Gruntfile.js', 'src/*'],
            tasks: ['jshint', 'compress']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};
