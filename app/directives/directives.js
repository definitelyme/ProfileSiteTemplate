
//Header Web Component
app.directive('headerWebPage', function () {
    return {
        restrict: 'EA',
        templateUrl: '/views/layouts/headerLayout.html'
    }
});


//Media Social Web Component
app.directive('mediaSocial', function(){
	return {
		restrict:'EA',
		template:'<a href="#"><i class="fa fa fa-linkedin-square"></i></a> \
		<a href="#"><i class="fa fa fa-google-plus-square"></i></a>\
		<a href="#"><i class="fa fa fa-facebook-square"></i></a>\
		<a href="#"><i class="fa fa fa-twitter-square"></i></a>\
        <a href="#"><i class="fa fa fa-github-square"></i></a>\
        <a href="#"><i class="fa fa fa-bitbucket-square"></i></a>\
        <a href="#"><i class="fa fa fa-git-square"></i></a>'
	}
});


//Skill Web Component
app.directive('skill', function () {
    return {
        restrict: 'EA',
        template: '<label>{{skillName}}</label>\
        <div class="progress" style="font-size:20px !important">\
        <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: {{skillValue}}">{{skillValue}}</div>\
        </div>',
        scope: {
            name: '@',
            value:'@'
        },
        link: function ($scope, element, attr) {
            $scope.skillName = attr.name;
            $scope.skillValue = attr.value + '%';
        }
    }

});
