angular.module('app').service('service', function($http, $state, $location, $window){


  // this.getHeadphones = function(){
  //   return p;
  // }

  this.getHeadphones = function(){
    return $http.get('/api/headphones').then(function(res){
      return res.data;
    })
  }
  this.getEarphones = function(){
    return $http.get('/api/earphones').then(function(res){
      return res.data;
    })
  }

  this.addToCart = function(product){
    console.log(product);
    return $http.get('/api/sessionUser').then(function(res){
      console.log(res);
      if(!res.data.passport){
        $window.location.href= 'http://localhost:3000/auth';
      }
      else{
        return $http.post('/api/addToCart', {
          product: product,
          id: res.data.passport.user[0].userid
        })
      }
    })
  }
  this.removeFromCart = function(product){
    var id = product.productid
    console.log(product);
    return $http.delete('/api/removeFromCart/' + id).then(function(res){
      console.log(res, 'plz baby jesus');
    })
  }
  this.deleteCartRows = function(product){
    return $http.delete('/api/removeRowFromCart').then(function(res){
      console.log(res, 'delete entire rows');
    })
  }
  this.getCartProducts = function(){
    return $http.get('/api/getCartProducts').then(function(res){
      // console.log(res);
      return res.data;
    })
  }





  // this.changeProductsArr = function(num){
  //   console.log('change products in service', num)
  //   if(num === 2){
  //     this.products = this.product.earphones;
  //     console.log(this.products);
  //     $state.reload();
  //     x = 2;
  //   }
  //   else if (num === 1) {
  //     this.products = this.product.headphones;
  //     $state.reload();
  //     x = 1;
  //   }
  // }
})
