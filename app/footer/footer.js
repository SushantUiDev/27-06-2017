(function(){
	angular.module("footer",[]);
	
	angular.module("footer")
	.config(function(){
		console.log("I am footer module config method...");
	})
	.run(function(){
		console.log("I AM footer module run method...");
	})
	
})();