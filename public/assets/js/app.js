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
		$scope.barcode.category = 'assets';
		$scope.max = 99999;
		$scope.floors = ['06', '10'];
		$scope.divisions = ['A', 'B'];
		$scope.types = [
			{'name':'Admin', 'value':'A'},
			{'name':'Production', 'value':'P'}
		];

		$scope.checkMax = function(){
			if($scope.barcode.category == 'workstation')
				$scope.max = 999;
			else
				$scope.max = 99999;
		}

		$scope.submit = function(){
			if($scope.detailsForm.$invalid){
				angular.forEach($scope.detailsForm.$error, function(field){
					angular.forEach(field, function(errorField){
						errorField.$setTouched();
					});
				});
			}
			else{
				if($scope.barcode.category == 'assets'){				
					var win = window.open('/barcode-assets/' + $scope.barcode.format + '/starting-point/' + $scope.barcode.starting_point + '/quantity/' + $scope.barcode.quantity , '_blank');
					win.focus();
				}
				else{
					var win = window.open('/barcode-work-station/' + $scope.barcode.floor + '/division/' + $scope.barcode.division + '/type/' + $scope.barcode.type + '/starting-point/' + $scope.barcode.starting_point + '/quantity/' + $scope.barcode.quantity , '_blank');
					win.focus();	
				}			
			}
		}
	}]);
//# sourceMappingURL=app.js.map
