var app = angular.module('app', [
	'ui.router',
	'ngMaterial',
	'ngMessages',
]);
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
app
	.controller('mainViewController', ['$scope', function($scope){
		$scope.barcode = {};

		$scope.submit = function(){		
			var win = window.open('/barcode-download/' + $scope.barcode.format + '/quantity/' + $scope.barcode.quantity , '_blank');
			win.focus();
		}
	}]);
//# sourceMappingURL=app.js.map
