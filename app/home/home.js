(function(){
	angular.module("home",[]);
	
	angular.module("home")
	.config(function(){
		console.log("I am home module config method...");
	})
	.run(function(){
		console.log("I am home module run method...");
	})
})();