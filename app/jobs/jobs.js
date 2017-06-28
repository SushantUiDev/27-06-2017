(function(){
	angular.module("jobs",[]);
	
	angular.module("jobs")
	.config(function(){
		console.log("I am jobs modules config method...");
	})
	.run(function(){
		console.log("I am jobs modules run method...");
	})
})();