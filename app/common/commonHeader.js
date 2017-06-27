(function(){
	function commonHeaderFn(){
		return{
			restrict:"AE",
			templateUrl:"app/header/header.tpl.html"
		}
	}
	angular.module("common")
	.directive("commonHeader",[commonHeaderFn])
})();