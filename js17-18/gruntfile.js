module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
    	options: {
      		separator: ';'
    	   },
	 	dist: {
		 	src: ['css/src/*.css'],
		 	dest: 'css/dist/main.min.css'
	 } 
	},
	  uglify: {
	  dist: {
		 	src: ['css/dist/main.min.css'],
		 	dest: 'css/dist/main.min.css'
	 } 
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['concat', 'uglify']);
};