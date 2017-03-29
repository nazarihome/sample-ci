angular.module('playlistModule')

it('has a dummy spec to test 3 + 3', function() {
    expect(3+3).toEqual(12);
});
    .controller('BookController', function($scope, $routeParams) {
        $scope.name = 'BookController';
        $scope.params = $routeParams;
    });