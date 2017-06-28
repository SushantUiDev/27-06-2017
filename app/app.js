(function(){
	angular.module("myApp",["header","common","employee","footer","jobs"]);
	
	angular.module("myApp")
	.config(function(){
		console.log("I am myApp config method...");
	})
	.run(function(){
		console.log("I am myApp run method...")
	})
})();