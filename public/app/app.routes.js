app
	.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		/* Defaul Theme Blue - Light Blue */
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue')
			.accentPalette('green', {
				'default':'A700'
			});

		$urlRouterProvider
			.otherwise('/page-not-found')
			.when('', '/');

		$stateProvider
			.state('page-not-found',{
				url: '/page-not-found',
				templateUrl: '/app/views/page-not-found.view.html',
			})

			.state('main', {
				url: '/',
				views: {
					'':{
						templateUrl:'/app/views/main.view.html',
						controller:'mainViewController'
					},
				},
			})
	}]);