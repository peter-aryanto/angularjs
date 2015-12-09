angular.module('customFilters', [])
.filter('unique', function () {
  return function (items, propertyName) {
    if (angular.isArray(items) && angular.isString(propertyName)) {
      var result = [];
      var uniqueCollection = {};
      for (var i = 0; i < items.length; i++) {
        var value = items[i][propertyName];
        if(angular.isUndefined(uniqueCollection[value])) {
          uniqueCollection[value] = true;
          result.push(value);
        }
      }
      result.push('Ape');
      return result;
      /*
      // THIS WAY ALSO WORKS!
      var uniqueCollection = {};
      for (var key in items) {
        var value = items[key][propertyName];
        uniqueCollection[value] = true;
      }
      return Object.keys(uniqueCollection).map(function (key) { return key; });
      */
    } else {
      return ['Error!'];
    }
  };
})
.filter('pages', function () {
  return function (items, maxItemsPerPage) {
    var result = [];
    var noOfPages = 0;
    if (angular.isArray(items)) {
      noOfPages = Math.ceil(items.length / maxItemsPerPage);
    }
    for (var x = 1; x <= noOfPages; x++) {
      result.push(x);
    }
    return result;
  };
})
.filter('selectedPage', function () {
  return function (items, selectedPage, maxItemsPerPage) {
    var result = [];
    if (angular.isArray(items)) {
      for (var x = (selectedPage - 1) * maxItemsPerPage; (x < selectedPage * maxItemsPerPage) && (x < items.length); x++) {
        result.push(items[x]);
      }
    }
    return result;
  }
})
;
