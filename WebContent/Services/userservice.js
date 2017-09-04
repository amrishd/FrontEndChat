/**
 * 
 */
app.factory('userservice',function($http){
var userservice={}
userservice.registeruser=function(user)
{
	console.log(user);
   return  $http.post("http://localhost:8085/chatroom/registration",user)
}
userservice.log=function(user)
{
   return $http.post("http://localhost:8085/chatroom/Login",user)	

}
userservice.logoutUser=function()
{
	
  return $http.get("http://localhost:8085/chatroom/logout")
}

userservice.updateUser=function(user)

{

	return $http.post("http://localhost:8085/chatroom/updateUser",user)
}
userservice.enableOrDisable=function(user)
{
	
    return $http.post("http://localhost:8085/chatroom/enableOrDisable",user)
}

return userservice;



})