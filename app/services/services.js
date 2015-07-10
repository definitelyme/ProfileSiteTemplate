app.factory('appService', function ($http) {
    var appServices = {
        getLanguages: function () {
            var promise = $http.get('/models/languages.json')
                     .then(function (result) {
                         return result.data;
                     });
            return promise;
        }
    }
    return appServices;
});