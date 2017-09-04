var app=angular.module("myApp",['ngRoute' , 'ngCookies'])


app.config( function($routeProvider)
		{
	      
		$routeProvider

		.when('/',{
			    templateUrl:'Views/RegistrationForm.html',
				controller: 'UserController'
					
		})
	   .when('/login',{
		  
		   templateUrl:'Views/LoginForm.html'
		 
	   
		 })
		 .when('/home',{
			 templateUrl:'Views/home.html'
		 })
		 
		 .when('/logout',{
			 templateUrl:'Views/LogoutForm.html'
				 
		  })
		  .when('/updateUser',{
			  templateUrl:'Views/updateUser.html'
		  
		  })
          .when('/enableOrDisable',{
        	 templateUrl:'Views/enableordisable.html'
          })	   
  
		  .when('/savejob',{
			templateUrl:'Views/savejob.html',
			controller:'JobController'
		   
		  })
		  .when('/getalljobs',{
			templateUrl:'Views/GetAllJobs.html',
			controller:'JobController'
		  })
		  
		  .when('/listOfSugestedUsers',{
			  templateUrl:'Views/listOfSugestedUsers.html',
			  controller:'FriendController'
		  })
		  .when('/PendingRequest',{
			  templateUrl:'Views/PendingRequest.html',
			  controller:'FriendController'
		  })
        		
		  .when('/ListOfFriends',{
			  templateUrl:'Views/LisOfFriends.html',
			  controller:'FriendController'
		  })
		  .when('/chat',{
				templateUrl:'Views/chat.html',
				controller:'ChatCtrl'
		  })
           .when('/SaveBlog',{
        	   templateUrl:'Views/SaveBlog.html',
				controller:'BlogController'
		  })
		  .when('/getAllBlogUsers',{
	        	   templateUrl:'Views/getAllBlogUsers.html',
					controller:'BlogController'
		  })
		  .when('/getAllPendingBlogs',{
	        	   templateUrl:'Views/GetAllPendingBlogs.html',
					controller:'BlogController'
		  })
	        .when('/addImage',{
	        	templateUrl:'Views/profilepicture.html',
	        	controller:'ProfilePictureController'
	        })
		});
	
