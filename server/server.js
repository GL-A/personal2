var express = require('express');
var session = require('express-session');
var massive = require('massive');
var config = require('./config.js');
var bodyParser = require('body-parser');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var stripe = require("stripe")(stripeKey);


var app = module.exports = express();
var stripeKey = config.stripeKey;
// app.use(express.static(__dirname + './../'));
app.use(express.static(__dirname + './../public'));

app.use(bodyParser.json());

// app.post('/api/payment', function(req, res, next_{
//   console.log(req.body);
//
//   var chargeAmt = req.body.amount;
//   var amountArray = chargeAmt.toString().split('');
//   var pennies = [];
//   for(var i = 0; i < amountArray.length; i++){
//     if(amountArray[i] === "."){
//       if(typeof amountArray[i + 1] === "string"){
//         pennies.push(amountArray[i + 1]);
//       } else{
//         pennies.push("0");
//       }
//       if(typeof amountArray[i + 2] === "string") {
//         pennies.push(amountArray[i + 2]);
//       } else{
//         pennies.push("0");
//       }
//       break;
//     }
//   }
// }))
app.post('/api/payment', function(req, res, next){
  console.log(req.body);
  const dollas = req.body.amount.toString().split('');
  for(var x = 0; x < dollas.length; x++){
    if(dollas[x] === '.'){
      console.log('contains period');
      //convert amount to pennies
      const chargeAmt = req.body.amount;
      const amountArray = chargeAmt.toString().split('');
      const pennies = [];
      for (var i = 0; i < amountArray.length; i++) {
        if(amountArray[i] === ".") {
          if (typeof amountArray[i + 1] === "string") {
            pennies.push(amountArray[i + 1]);
          } else {
            pennies.push("0");
          }
          if (typeof amountArray[i + 2] === "string") {
            pennies.push(amountArray[i + 2]);
          } else {
            pennies.push("0");
          }
          break;
        } else {
          pennies.push(amountArray[i])
        }
      }
      const convertedAmt = parseInt(pennies.join(''));
      console.log("Pennies: ");
      console.log(convertedAmt);

      const charge = stripe.charges.create({
      amount: convertedAmt, // amount in cents, again
      currency: 'usd',
      source: req.body.payment.token,
      description: 'Test charge from grahms repo'
    }, function(err, charge) {
         return res.sendStatus(200);
      if (err && err.type === 'StripeCardError') {
        // The card has been declined
      }
    });
  }
  }

    console.log('no .');
    var convert = req.body.amount;
    convert = parseInt(convert + '00');
    const charge = stripe.charges.create({
    amount: convert, // amount in cents, again
    currency: 'usd',
    source: req.body.payment.token,
    description: 'Test charge from grahms repo'
  }, function(err, charge) {
      console.log('we need this user', req)
      res.redirect('/auth/me');
      //  return res.sendStatus(200);
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    }
  });





});

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

db.create_tables(function(err, res){
  console.log(err);
});

app.use(session({
  secret: 'Best secret EVA!!',
resave: false,
saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy(config.authConfig, function(accessToken, refreshToken, extraParams, profile, done){
  console.log(profile.emails[0].value, profile._json.user_id);
  db.find_user([profile.emails[0].value, profile._json.user_id], function(err, resp){
    console.log('returning from find user_id', resp);
    console.log(err);
    if(!resp[0]){
      db.create_user([profile.emails[0].value, profile._json.user_id], function(err, respo){
        console.log('created user', respo);
        return done(null, respo);
      })
    }
    console.log('this is the resp i want', resp);
    return done(null, resp);
  })
}));



db.get_headphones(function(err, res){
  console.log(err);
})
db.get_earphones(function(err, res){
  console.log(err);
})


var productsCtrl = require('./productsCtrl');
app.get('/api/headphones', productsCtrl.getHeadphones);
app.get('/api/earphones', productsCtrl.getEarphones);
// app.post('/api/postUser' productsCtrl.postUser);
app.get('/api/sessionUser', function(req, res){
  res.status(200).send(req.session);

})
app.post('/api/addToCart', productsCtrl.addToCart);
app.get('/api/getCartProducts', function(req, res){
  console.log(req.user);
  db.get_cart_products([req.user[0].userid], function(err, results){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      res.send(results);
    }
  })
})
app.delete('/api/removeFromCart/:id', productsCtrl.removeFromCart);
app.delete('/api/removeRowFromCart', productsCtrl.removeRowFromCart);



app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/',
  failureRedirect: '/auth/me'

}))

passport.serializeUser(function(user, done) {
  console.log('foo');
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('my user', user);
  done(null, user);
});

app.get('/auth/me', function(req, res, next){
  console.log('USER ID', req.session.passport.user[0].userid)
  var idIneed = parseInt(req.session.passport.user[0].userid);
  db.delete_from_table([idIneed], function(err, res){
    if(err){
      console.log(err);
    }
    else{
      console.log('success');
    }
  })
  if(!req.user){
    res.status(404).send('User not Found');
  }
  else{
    return res.status(200).send(req.user);
  }
})





var port = config.port;
app.listen(port, function(){
  console.log('Listening on port', port);
})
