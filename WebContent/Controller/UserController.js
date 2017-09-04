app.controller('UserController', main);
	
function main($scope,$location,userservice , $cookieStore, $rootScope){
		
	$scope.init=function()
	{
		console.log("Controller initialised");
	}
	
	
		$scope.register=function(){
		console.log($scope.User);
		userservice.registeruser($scope.User).then(function(response){
		
			$scope.message="register successfully";
			$location.path('/Login')
			
		},function(response){
		    
			$scope.error=response.data;
			$location.path('/registration')
		})
	
		}
		
		$rootScope.islogin = false;
		$scope.user={}
		
		
		$scope.log=function(){
			console.log($scope.User)
			userservice.log($scope.User).then(function(response){
			    $rootScope.islogin=true;
			    console.log($scope.islogin);
			    $scope.user=response.data;
			    $rootScope.userDetail=response.data;
			    console.log($rootScope.userDetail);
				$location.path('/home')
				$cookieStore.put("user", $scope.user);
				
				
			},function(response){
				$scope.error=response.data.message;
				alert("invalid id or password");
				$location.path('/registration')
				
			})
			
		}
	$scope.logout=function(){
			userservice.logoutUser($scope.User).then(function(response){
				$rootScope.islogin=false;
				$cookieStore.remove("user");
				$location.path('/registration')
				
			},function(response){
				$scope.error=response.data;
				$location.path('/home')
				
			})
			
		}
			
    /*   $scope.updateUser=function(){
        	userservice.updateUser($scope.User).then(function(response){
        		$scope.message="user updated successfully";
        		
        	},function(response){
        		$scope.error=response.data;
        		
        	})
        	
          $scope.enableOrDisable=function(){
        		userservice.enableOrDisable($scope.User).then(function(response){
        			$scope.message="enabledsuccessfully";
        			
        		}),function(response){
        			$scope.error=response.data;
        	
        		}
        		
        	}
        	
        	
      }*/
	

}
