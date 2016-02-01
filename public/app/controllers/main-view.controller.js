app
	.controller('mainViewController', ['$scope', function($scope){
		$scope.barcode = {};

		$scope.submit = function(){		
			var win = window.open('/barcode-download/' + $scope.barcode.format + '/quantity/' + $scope.barcode.quantity , '_blank');
			win.focus();
		}
	}]);