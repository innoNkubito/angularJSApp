var app = angular.module('guitarApp', [
    'ui.router',
	'headermodule',
	'commonmodule',
	'buyModule',
    'confirmMod'
	]);

app.config(function($stateProvider) {

   // $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/Header/headerpartial.html'
        })
        .state('buy', { 
            url: '/buy',
            templateUrl: '/BuyPage/buyPagePartial.html'    
        }).state('confirm', { 
            url: '/confirm',
            templateUrl: '/Confirm/confirmPagePartial.html'    
        });
        
});