/**
 * JobController
 */
app.controller('JobController',function($scope,$location,jobservice){
	
	$scope.save=function(){
		console.log($scope.job)
		jobservice.save($scope.job).then(function(response){
			
			alert("successfully saved");
			$scope.message=response.data.message;
			$location.path=('/getalljobs')
		
		},function(response){
		    
			$scope.error=response.data;
			$location.path('/savejob')
		})
	}
	
	$scope.job={};
	$scope.getjobs=function(){
		
		jobservice.getjobs().then(function(response){
			
		$scope.job=response.data;
		console.log($scope.job);
		
		
		
		},function(response){
			
			$scope.message=response.data.message;
			$location.path('/login')
			
			
		})
		
		
	}
	
	$scope.getjobbyid=function(jobid){
	
	jobservice.getjobbyid(jobid).then(function(response){
		      
		      
	   $scope.job=response.data;
	   
			 
	},function(response){
				
	  console.log(response.data)	
	})
	}
/*	$scope.updatejob($scope.Job).then(function(response){
		      
		$scope.message="job updated succsessfully";
	    $location.path('/')	      
			
	},function(response){
				
       $scope.error=response.data
	   $location.path('/')			
			
	})*/
	
	$scope.modal=false;
	$scope.updatejob=function(j)
	{
		$scope.modaljob=j;
		console.log($scope.modaljob);
		$scope.modal=true;
		
	}
	
	$scope.close=function(){
		$scope.modal=false;
	}
	
	
	
	$scope.update=function(modaljob){
	      jobservice.update($scope.modaljob).then(function(response){
			alert("update sucessfully");
			$location('/getalljobs');
		},function(response){
			$scope.error=response.data.message
			alert($scope.error);
			
			
		})
		
	}

});