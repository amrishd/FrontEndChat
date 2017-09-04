/**
 *blog service 
 */
app.factory('blogservice',function($http){
	var blogservice={};
	blogservice.add=function(com){
		
		return $http.post("http://localhost:8085/chatroom/addComment",com);
		
	}
	blogservice.saveblog=function(blog){
		
		return $http.post("http://localhost:8085/chatroom/SaveBlog",blog);
		
	}
    blogservice.getAllBlogUsers=function(){
		
		return $http.get("http://localhost:8085/chatroom/getAllBlogUsers");
		
	}
    blogservice.getAllPendingBlogs=function(){
	
	return $http.get("http://localhost:8085/chatroom/getAllPendingBlogs");
	
    }
  /*  blogservice.updateblog=function(bg){
	
	return $http.post("http://localhost:8085/chatroom/UpdateBlog",bg);
	
    }*/
    blogservice.enable=function(id,status){
	
	return $http.get("http://localhost:8085/chatroom/EnableorDisable/?id="+id+"&status="+status);
	
    }
    
    blogservice.update=function(modalBlog){
    	
    	return $http.post("http://localhost:8085/chatroom/UpdateBlog",modalBlog)
    }
 return blogservice;
})