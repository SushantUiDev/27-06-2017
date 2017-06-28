(function(){
	angular.module("client",[])
	
	angular.module("client")
	.config(function(){
		console.log("I am client module config method...")
	})
	.run(function(){
		console.log("I am client module run method...");
	})
})();