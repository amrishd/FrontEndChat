/**
 * blog controller
 */
app.controller("BlogController",function($scope, $location,blogservice, $cookieStore){
	
	$scope.user = $cookieStore.get("user");
	
	$scope.dontshow= true;
	
	$scope.commentonblog = {
		'blogId': "",
		'comments' : ""
	}
	$scope.add=function(com , id){
	
		$scope.commentonblog.blogId=id;
		$scope.commentonblog.comments =com;
		blogservice.add( $scope.commentonblog ).then(function(response){
			
		alert("comment is added");
		$location.path('/getAllBlogUsers')
		
		}),function(response){
			
			$scope.message=response.data.message;
			console.log(response.data.message);
			
		}
		
		
	}
	$scope.blog={}
	$scope.saveblog=function(){
		console.log($scope.blog);
		blogservice.saveblog($scope.blog).then(function(response){
		alert("post successfully");
		$location.path('/getAllBlogUsers')
		},function(response){
			
		$scope.message=response.data.message;
		console.log(response.data.message);
		})
	}
	
	$scope.blogs={};
	$scope.getAllBlogUsers=function(){
	blogservice.getAllBlogUsers().then(function(response){
		$scope.blogs=response.data;
		console.log($scope.blogs);
	},function(response){
		$scope.message=response.data.message;
	    $location.path('/login');
	})	
		
   }
	
	$scope.blogg={}
	$scope.getAllPendingBlogs=function(){
		console.log($scope.blogg);
		blogservice.getAllPendingBlogs().then(function(response){
			$scope.blogg=response.data;
			console.log($scope.blogg);
		},function(response){
			$scope.message=response.data.message;
		})
		
	}
	
	/*$scope.UpdateBlog=function(blog){
		$scope.UpdateBlog($scope.blog).then(function(response){
			alert("blog updated successfully");
		    $location.path('/getAllBlogUsers') 
		
		},function(response){
			$scope.message=response.data.message;
			$location.path('/UpdateBlog')
		})
		
	}*/
	
	$scope.enable=function(id){
		blogservice.enable(id,"Y").then(function(response){
			alert("approved successfully");
			$scope.getAllPendingBlogs();
			$location.path('/getAllPendingBlogs')
			//console.log(response.data);
			},function(response){
			$scope.message=resposne.data.message;
			console.log(response.data.message);
		})
		
	}
	
	$scope.modal=false;
	$scope.updateblog=function(bg)
	{
		$scope.modalBlog=bg;
		console.log($scope.modalBlog);
		$scope.modal=true;
		
	}
	
	$scope.close=function(){
		$scope.modal=false;
	}
	
	
	
	$scope.update=function(modalBlog){
		blogservice.update($scope.modalBlog).then(function(response){
			alert("update sucessfully");
			$location('/getAllBlogUsers');
		},function(response){
			$scope.error=response.data.message
			alert($scope.error);
			
			
		})
		
	}

	
	
	
	
	
	
	
})