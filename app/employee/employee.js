(function(){
	angular.module("employee",[]);
	
	angular.module("employee")
	.config(function(){
		console.log("I am employee module config method...");
	})
	.run(function(){
		console.log("I am employee module run method...");
	})
})();