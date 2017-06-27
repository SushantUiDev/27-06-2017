(function(){
	angular.module("common",[]);
	
	angular.module("common")
	.config(function(){
		console.log("I am common module config method");
	})
	.run(function(){
		console.log("I am common module run method...");
	})
})();