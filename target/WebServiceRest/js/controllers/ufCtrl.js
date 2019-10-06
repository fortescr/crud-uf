	angular
    .module('app')

    .controller('ufCtrl', ufCtrl)


ufCtrl.$inject = ['$scope', 'Data', 'toastr', 'Notification'];

function ufCtrl($scope, Data, toastr, Notification) {
	
	var openedToasts = [];

	$scope.getUfs = function(){
	  	Data.get('uf/ufs').then(function(result){
			 if(result.status == 200) {
			   $scope.ufs = result.data;
			 }
		});
	};
  	$scope.remove = function(uf){
  		Data.put('uf/remove', uf).then(function (result) {
			if(result.status == 200){
				openedToasts.push(toastr[Notification.options.type]("", "Registro excluido com sucesso!"));
				$scope.getufs();
			}
		});
	};
	
	$scope.getUfs();
};