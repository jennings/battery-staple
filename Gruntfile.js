module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['*.js']
        },
        watch: {
            files: ['*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};
