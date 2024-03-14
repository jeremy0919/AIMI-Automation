
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate and minify JavaScript files
    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/script.min.js': ['dist/js/script.js']
        }
      }
    },

    // Compile SCSS to CSS
    sass: {
      dist: {
        files: {
          'dist/Css/styles.css': 'Src/Sass/styles.scss'
        }
      }
    },

    // Copy HTML files
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },

    // Watch for changes
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ['src/Sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: true,
        },
      },
      html: {
        files: ['src/index.html'],
        tasks: ['copy'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load plugins

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [ 'sass', 'watch']);
};


//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine
/*module.exports = function(grunt) {
   
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
      concat: {
        dist: {
            src: ['src/js/*.js'],
            dest: 'dist/js/script.js',
        },
    },
    uglify: {
        dist: {
            files: {
                'dist/js/script.min.js': ['dist/js/script.js']
            }
        }
    },
      // Watch task
      watch: {
        sass: {
            files: ['src/scss/***.scss'],
            tasks: ['sass'],
            options: {
                livereload: true
            }
        },
        js: {
            files: ['src/js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
                livereload: true
            }
        }
    }
    });
  
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task
   // grunt.registerTask('default', ['sass', 'watch']); // task to be run
   grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
  };
  */