/**
 * Friend Controller
 */
app.controller('FriendController',function($scope,$location,friendservice , $cookieStore){
		
	$scope.user = $cookieStore.get("user");
	
	function listOfSugestedUsers(){
	  
	  friendservice.sugestedusers().then(function(response){
		  
      $scope.sujestedusers=response.data;
      
      console.log($scope.sujestedusers);
		  
		 },function(response){
		  
		  console.log(response.status);
	})
}	

function pendingRequests(){
	friendservice.pendingRequests().then(function(response){
	$scope.listofPendingRequests=response.data;
	
	console.log($scope.listofPending);
	},function(response){
	      console.log(response.status);	
	})
	
}
  
function listOfFriends(){
	
	$scope.friendsList=friendservice.listOfFriends().then(function(response){
		console.log(response.data);
		$scope.friendsList=response.data;	
		
	},function(response){
		console.log(response.status);
		
	})
}	
	/*
	 * toUsername=user.username
	 */
	$scope.friendrequest=function(toUsername){
	friendservice.sendFriendRequest(toUsername).then(function(response){
		alert("Friendrequest hasbeen send successfully...")
		listOfSugestedUsers();
		$location.path('/sugestedusers')
	},function(response){
		console.log(response.status);
		
	})	
		
	}
	
 $scope.updatePendingRequest=function(fromId,status) {
	 alert('entering update pending request')
	 friendservice.updatePendingRequest(fromId,status).then(function(response){
		 pendingRequests();
		 console.log(response.data)
		 $location.path('/pendingrequests')
	 },function(response){
		 
		 console.log(response.data);
	 })
 }
   
 
   listOfFriends();
   
   pendingRequests();
   
   listOfSugestedUsers();

   //updatePendingRequest(fromId,status)

   //sendFriendRequest(toUsername)

})
