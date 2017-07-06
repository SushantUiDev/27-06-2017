(function(){
	function productsCtrlFn(){
		var vm=this;
		vm.s="sushant";
		vm.products=[
			{"productsName":"Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone",
			 "companyName":"Samsung","price":"$950","smallMemory":"16GB","bigMemory":"32GB"}
		];
	}
	angular.module("products")
	.controller("productsCtrl",[productsCtrlFn]);
})();