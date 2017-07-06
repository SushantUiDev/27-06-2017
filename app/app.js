(function(){
	angular.module("myApp",["home","header","common","login","footer","jobs","products"]);
	
	angular.module("myApp")
	.config(function(){
		console.log("I am myApp config method...");
	})
	.run(function(){
		console.log("I am myApp run method...");
	})
})();