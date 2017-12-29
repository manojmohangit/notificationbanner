	module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify : {
      options: {
        mangle: {
          reserved: ['jQuery']
        }
      },
      dist: {
        files: {
          'src/jquery.notificationbanner.min.js': ['src/jquery.notificationbanner.js']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test', ['uglify']);
};