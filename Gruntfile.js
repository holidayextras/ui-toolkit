module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "dist/toolkit.min.css": "src/less/styles.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};
