/**
 * job service
 */
app.factory('jobservice',function($http){
	
	var jobservice={}
	
	jobservice.save=function(job)
	{
		console.log(job);
	   return  $http.post("http://localhost:8085/chatroom/saveJob",job)
	}
    
	jobservice.getjobs=function()
    {
    	return $http.get("http://localhost:8085/chatroom/getAllJobs")
    }
    
	jobservice.getjobbyid=function(jobid)
    {
    	return $http.post("http://localhost:8085/chatroom/getjobbyid/{jobid}"+jobid)
    }
    
	jobservice.update=function(modaljob)
    {
    	return $http.post("http://localhost:8085/chatroom/updatejob",modaljob)
    }
    
    return jobservice;
})
