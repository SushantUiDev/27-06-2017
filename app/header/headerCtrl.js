(function(){
	function headerCtrlFn(){
		var vm=this;
		
		vm.companyName="Job Portal";
		
		vm.navbar=["HOME","ABOUT","JOBS","CLIENTS","PRODUCTS","LOGIN"];
		
		vm.homeTemplate="app/home/home.tpl.html";
		vm.aboutTemplate="app/about/about.tpl.html";
		vm.jobsTemplate="app/jobs/jobs.tpl.html";
		vm.loginTemplate="app/login/login.tpl.html";
		vm.clientTemplate="app/clients/client.tpl.html";
		vm.productsTemplate="app/products/products.tpl.html";
		
		vm.loadView=function(param){
			console.log(param);
			if(param == "HOME"){
				vm.loadTemplate=vm.homeTemplate;
			}else if(param=="ABOUT"){
				vm.loadTemplate=vm.aboutTemplate
			}else if(param == "JOBS"){
				vm.loadTemplate=vm.jobsTemplate;
			}else if(param == "LOGIN"){
				vm.loadTemplate=vm.loginTemplate;
			}else if(param == "CLIENTS"){
				vm.loadTemplate=vm.clientTemplate;
			}else if(param == "PRODUCTS"){
				vm.loadTemplate=vm.productsTemplate;
			}
		}
		
		
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn]);
})();