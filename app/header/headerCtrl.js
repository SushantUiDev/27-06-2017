(function(){
	function headerCtrlFn(){
		var vm=this;
		vm.companyName="Mama";
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn]);
})();