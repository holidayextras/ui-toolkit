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
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

};
