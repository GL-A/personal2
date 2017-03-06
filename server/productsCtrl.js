var app = require('./server.js');
var db = app.get('db');


module.exports = {
  getHeadphones: function(req, res){
    db.get_headphones([], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  getEarphones: function(req, res){
    db.get_earphones([], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  postUser: function(req, res){
    db.post_user([], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  addToCart: function(req, res){
    console.log(req.body, 'req.body');
    db.check_cart([req.body.product.productid, req.body.id], function(err, res){
      console.log('this is reqsadflsdfjl', req.body.id);
      // Checks cart to see if product exists in current users cart
      console.log('we need this', res);
      if(res.length){
        // if there is any response, meaning product is in cart

        db.update_item_in_cart([res[0].productid, res[0].userid, res[0].qty + 1], function(err, resp) {
          console.log('loggin resp: ', resp);
        })
      }
      else{
        db.add_item_to_cart([req.body.product.productid, req.body.id, 1], function(err, res){
          console.log('adding item to cart');
        })
      }
    })

    // db.add_item_to_cart([req.body.product.productid, req.body.id], function(err, res){
    //
    // })
  },
  removeFromCart:function(req, res){
    console.log(req.params.id, 'removing');
    console.log(req.params.id, req.user[0].userid);
    db.check_cart([req.params.id, req.user[0].userid], function(err, res){
      console.log(res)
      if(res[0].qty > 1){
        db.update_item_in_cart([res[0].productid, res[0].userid, res[0].qty - 1], function(err, res){
          console.log('updating res', res);
        })
      }
      else{
        db.remove_from_cart([req.params.id, req.user[0].userid], function(err, res){
          console.log(res);
        })
      }
    })
  },
  removeRowFromCart:function(req, res){
    console.log(req, 'row request');
    console.log(req, 'row res');

    db.delete_from_table([req.user[0].userid], function(err, res){
      console.log(req.user[0].userid);
      if(err){
        res.send(err);
      }
      else{
        res.send('row deleted');
      }
    })
  }
  // getCartProducts: function(req, res){
  //
  // }
}
