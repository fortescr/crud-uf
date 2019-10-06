module.exports = function(grunt) {
  grunt.initConfig({
	uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'crud-uf/js/app.min.js' : [ 'js/app.js' ],
		  'crud-uf/js/controllers.min.js' : [ 'js/controllers.js' ],
		  'crud-uf/js/notificationFactory.min.js' : [ 'js/notificationFactory.js' ],
		  'crud-uf/js/routes.min.js' : [ 'js/routes.js' ],
		  'crud-uf/js/data.min.js' : [ 'js/data.js' ],
		  'crud-uf/js/controllers/ufListCtrl.min.js' : [ 'js/controllers/ufListCtrl.js' ]		  		  
        }
      }
	}
  });
 
// Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );


  // Tarefas que ser�o executadas
  grunt.registerTask( 'default', [ 'uglify' ] );
};