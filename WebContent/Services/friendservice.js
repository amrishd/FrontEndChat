/**
 * FriendService
 */
app.factory('friendservice',function($http){
	
var friendservice={};


friendservice.sugestedusers=function(){
	return $http.get("http://localhost:8085/chatroom/listOfSugestedUsers")
}

friendservice.pendingRequests=function(){
	return $http.get("http://localhost:8085/chatroom/PendingRequest")
}

friendservice.listOfFriends=function(){
	return $http.get("http://localhost:8085/chatroom/LisOfFriends")
}

friendservice.sendFriendRequest=function(toUsername){
	return $http.get("http://localhost:8085/chatroom/FriendRequest/"+toUsername)
}

friendservice.updatePendingRequest=function(fromId,status){
	return $http.put("http://localhost:8085/chatroom/updatePendingRequest/"+fromId+"/"+status);
}

return friendservice;
})
