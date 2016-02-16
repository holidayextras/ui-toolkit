'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    yaml_validator: {
      lint_everything: {
        src: [ 'configs/*.yml' ]
      }
    },
    jsonlint: {
      sample: {
        src: [ 'configs/*.json' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-yaml-validator');

};
