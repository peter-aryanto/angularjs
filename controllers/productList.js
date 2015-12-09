angular.module('sportsStore')
.constant('activeSelectorClass', 'btn-primary')
.constant('maxProductsPerPage', 2)
.controller('productListCtrl',
  function ($scope/*, $filter*/, activeSelectorClass, maxProductsPerPage, cart) {
    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.maxProductsPerPage = maxProductsPerPage;

    $scope.selectCategory = function (category) {
      selectedCategory = category;
      $scope.selectedPage = 1;
    };
    $scope.filterByCategory = function (product) {
      return !selectedCategory || product.category === selectedCategory;
    };
    $scope.getCategoryClass = function (category) {
      return ((!category && !selectedCategory) || category === selectedCategory) ? activeSelectorClass : '';
    };

    $scope.selectPage = function (page) {
      $scope.selectedPage = page;
    };
    $scope.getPageClass = function (page) {
      return (page === $scope.selectedPage) ? activeSelectorClass : '';
    };
    
    $scope.addProductToCart = function(product) {
      cart.addProduct(product.id, product.name, product.price);
    }
  }
)
;
