angular
.module('app')

.controller('ufEditCtrl', ufEditCtrl)

ufEditCtrl.$inject = ['$scope', 'Data', '$location', '$stateParams', '$templateCache', '$templateRequest', 'toastr', 'Notification'];

function ufEditCtrl($scope, Data, $location, $stateParams, $templateCache, $templateRequest, toastr, Notification) {

	var openedToasts = [];
	
	if($stateParams.id > 0){
		Data.get('uf/getUf/'+$stateParams.id).then(function(result){
			$scope.uf = result.data;
		});   
	}

	

	$scope.save = function(uf){  		
		if(uf.id == undefined){
			uf.id=0;
		};

		alert(uf.id);
			if (uf.id > 0){
				Data.put('uf/edit', uf).then(function (result) {
					if(result.status == 200){
						uf.id=result.data;
						openedToasts.push(toastr[Notification.options.type]("", "Registro salvo com sucesso!"));
						$location.path("/ufs");
					}else{
						openedToasts.push(toastr[Notification.options.type]("", "Ocorreu um erro, tente novamente."));
					}
				});
			}else{
				Data.post('uf/save', uf).then(function (result) {
					alert(uf.nome);
					if(result.status == 200){
						uf.id=result.data;
						openedToasts.push(toastr[Notification.options.type]("", "Registro salvo com sucesso!"));
						$location.path("/ufs");
					}else{
						openedToasts.push(toastr[Notification.options.type]("", "Ocorreu um erro, tente novamente."));
					}
				});
			}
		

	};


};