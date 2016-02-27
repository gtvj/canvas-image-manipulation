module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'app.js']
    },
    sass: { 
    dist: { 
      options: { 
        style: 'expanded'
      },
      files: { 
        'main.css': 'main.scss'
      }
    }
    },
    watch: {
      options: {
        // Note:  To see the effects of livereload simply have the page open in a browser. 
        //        No need to go to the relevant port
        livereload: true
      },
      files: ['*.js', '*.htm', '*.scss'],
      tasks: ['jshint','sass']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "watch" task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "sass" task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['jshint','sass']);

};