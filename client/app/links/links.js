angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	$scope.data = {}

	$scope.getLinks = function() {
      Links.getAll()
      .then(function(links){
        $scope.data['links'] = links
      })
      .catch(function(err){
      	console.error(err)
      })
	};

	$scope.getLinks();
});