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
	
	$scope.novo = function(){
		$scope.uf = '';
	};
	
  	$scope.remove = function(uf){
  		Data.put('uf/remove', uf).then(function (result) {
			if(result.status == 200){
				openedToasts.push(toastr[Notification.options.type]("", "Registro excluido com sucesso!"));				
			}
			$scope.getUfs();
		});
	};
	
	$scope.edit = function(uf){  		
		Data.get('uf/getUf/'+uf.id).then(function(result){
			$scope.uf = result.data;
		});   
	}
	
	$scope.save = function(uf){  		

		if (uf.id != undefined && uf.id > 0){
			Data.put('uf/edit', uf).then(function (result) {
				if(result.status == 200){
					openedToasts.push(toastr[Notification.options.type]("", "Registro salvo com sucesso!"));
					$scope.uf = '';
				}else{
					openedToasts.push(toastr[Notification.options.type]("", "Ocorreu um erro, tente novamente."));
				}
			});
		}else{
			Data.post('uf/save', uf).then(function (result) {
				if(result.status == 200){
					openedToasts.push(toastr[Notification.options.type]("", "Registro salvo com sucesso!"));
					$scope.uf = '';
				}else{
					openedToasts.push(toastr[Notification.options.type]("", "Ocorreu um erro, tente novamente."));
				}
			});
		}
	};
	
	$scope.getUfs();
};