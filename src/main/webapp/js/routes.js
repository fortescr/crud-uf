angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

	$urlRouterProvider.otherwise('/home');

	$ocLazyLoadProvider.config({
		debug: false
	});

	$stateProvider
	.state('app', {
		abstract: true,
		templateUrl: 'views/common/layouts/full.html',
		ncyBreadcrumb: {
			label: 'Root',
			skip: true
		}                
	})

	.state('app.main', {
		url: '/ufs',
		templateUrl: 'views/pages/ufList.html',
		resolve: {     
			loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load([				                         
				                         {
				                        	 files: ['js/libs/angular-toastr.tpls.min.js']
				                         }
				                         ]);
			}],
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load({
					files: ['js/controllers/ufCtrl.js']
				});
			}],                    
		}
	})  
}]);
