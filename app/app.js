var app=angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/views/profile.html' 
    })
	.when('/profile', {
	    templateUrl: '/views/profile.html'
	})
	.when('/resume', {
	    templateUrl: '/views/resume.html'
	})
	.when('/portfolio', {
	    templateUrl: '/views/portfolio.html'
	})
	.when('/contact', {
	    templateUrl: '/views/contact.html'
	})
});
