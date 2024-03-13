//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine
module.exports = function(grunt) {
   
    grunt.initConfig({// grunt object ie config
      pkg: grunt.file.readJSON('package.json'), // grunt object
  
      // Sass compilation
      sass: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
        dist: {
          files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
          }
        }
      },
  
      // Watch task
      watch: {
        css: {
          files: 'src/**/*.scss',
          tasks: ['sass'],
          options: {
            livereload: true,
          },
        },
      },
    });
  
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task
   // grunt.registerTask('default', ['sass', 'watch']); // task to be run
   grunt.registerTask('run', function(){
    console.log("I am running")
   })
   grunt.registerTask('sleep', function(){
    console.log("I am sleeping")
   })
  };
  