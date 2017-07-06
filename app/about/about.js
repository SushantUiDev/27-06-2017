(function(){
	angular.module("about",[]);
	
	angular.module("about")
	.config(function(){
		console.log("I am about module config method.... ");
	})
	.run(function(){
		console.log("I am about module run method...");
	})
})();