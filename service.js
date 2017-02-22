angular.module('app').service('service', function($http, $state){


  // this.getHeadphones = function(){
  //   return p;
  // }


  this.product = {
    headphones: [
      {
      "mainImg": 'images/products/header_headphone_retina_3340x810_V3.jpg.small.2x.jpg',
      "type": "Headphones",
      "height": "600px",
      "name": "Beats Solo3 Wireless",
      "image": "images/products/_0001_MNEN2-RGB-bttm.png.large.2x.png",
      "rating":{
        "rating-stars": 4,
        "amount": 28,
        },
      "description": "Designed for Sound. Tuned for Emotion",
      "features": ["Connect via Class 1 Bluetooth® with your device for wireless listening", "The award-winning sound and design you’ve come to love from Beats",
    "Up to 40 hours of battery life for multi-day use", "With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low"],
    "numberOfFeatures": 4,
    "price": 299.95

  },
  {
    "name": "Beats Studio \n Wireless",
    "height": "600px",
    "image": "images/products/_0000_MP1F2-RGB-bttm.png.large.2x.png",
    "rating":{
      "rating-stars": 2,
      "amount": 53,
    },
    "description": "Feel the Music. Not the Wires.",
    "features": ["Pair and play with your Bluetooth® device for wireless listening", "Dual-mode Adaptive Noise Canceling",
  "Award-winning Beats sound", "Up to 12 hours of battery life"],
  "numberOfFeatures": 4,
  "price": 379.95

},
  {
    "name": "Beats EP",
    "height": "600px",
    "image": "images/products/ep_pcp_1292x1480.png.large.2x.png",
    "rating":{
      "rating-stars": 4,
      "amount": 15,
    },
    "description": "Start Listening. Enter Premium Sound",
    "features": ["Fine-tuned acoustics for the clarity and depth you expect from Beats", "Durable, lightweight design reinforced with stainless steel",
  "Battery-free for unlimited playback", "Adjustable vertical sliders for a personalized fit"],
  "numberOfFeatures": 4,
  "price": 99.95

  },
  {
    "name": "Beats Solo 2",
    "height": "555px",
    "image": "images/products/_0003_overear-solo2-black-rgb-thrqrtleft.png.large.2x.png",
    "rating":{
      "rating-stars": 4,
      "amount": 28,
    },
    "description": "Designed for Sound. Tuned for Emotion",
    "features": ["Award-winning Beats sound", "Streamlined design for a flexible fit",
  "Durable and foldable so you can take them on the go"],
  "numberOfFeatures": 4,
  "price": 199.95

  },
  {
    "name": "Beats Pro",
    "height": "555px",
    "image": "images/products/_0002_overear-pro-black-rgb-thrqrtleft.png.large.2x.png",
    "rating":{
      "rating-stars": 5,
      "amount": 7,
    },
    "description": "The Revolution in Sound",
    "features": ["Clear highs and deep lows for premium sound quality", "Rotating ear cups",
  "Durable housing and cushioned headband for long hours in the studio"],
  "numberOfFeatures": 4,
  "price": 399.95

  }

],
    earphones:[
      {
      "mainImg": 'images/products/earphones/B312_black_hero_right_1720x970.jpg',
      "name": "Beats x",
      "type": "Earphones",
      "height": "710px",
      "image": "images/products/earphones/_0004_MLYE2-RGB-custom1.png.large.2x.png",
      "rating":{
        "rating-stars": 4.5,
        "amount": 48,
        },
      "description": "Talk. Listen. Beats",
      "features": ["Connect via Class 1 Bluetooth® with your device for wireless", "Up to 8 hours of battery life for when you’re on the go",
    "With Fast Fuel, a 5-minute charge gives you 2 hours of playback when battery is low", "Variety of eartip options offer personalized comfort and secure-fit wingtips provide stability", "Flex-Form cable provides all-day comfort with easy purse and pocket portability", "Authentic, clear acoustics deliver crisp sound fit for your life"],
    "numberOfFeatures": 4,
    "price": 149.95

    },
    {
    "name": "Powerbeats3 Wireless",
    "height": "700px",
    "image": "images/products/earphones/_0005_ML8V2-RGB-custom3.png.large.2x.png",
    "rating":{
      "rating-stars": 2.5,
      "amount": 87,
      },
    "description": "Performance. Power. Freedom.",
    "features": ["Connect via Class 1 Bluetooth® with your device for wireless workout freedom", "Up to 12 hours of battery life to power through multiple workouts",
  "With Fast Fuel, a 5-minute charge gives you 1 hour of playback when battery is low", "Sweat and water resistance to handle tough training", "Flexible, secure-fit earhooks maximize comfort and stability", "Take calls, control your music and activate Siri with RemoteTalk"],
  "numberOfFeatures": 4,
  "price": 199.95

  },
  {
  "name": "urBeats",
  "height": "565px",
  "image": "images/products/earphones/_0006_inear-urbeats-black-rgb-thrqrtleft.png.large.2x.png",
  "rating":{
    "rating-stars": 3.5,
    "amount": 38,
    },
  "description": "Upgrade Your Sound",
  "features": ["Deep bass, soaring highs, and clear midrange", "Solid metal housing creates an undisturbed listening experience", "Take calls and control music with RemoteTalk cable"],
  "numberOfFeatures": 4,
  "price": 99.95

  }

    ]
  }
  this.products = this.product.headphones;
  // var x = 1;
  // this.productsfunc = function(x){
  //   if(x === 2){
  //     this.products = this.product.earphones;
  //   }
  //   else if (x === 1) {
  //     this.products = this.product.headphones;
  //   }
  //
  // }



  this.changeProductsArr = function(num){
    console.log('change products in service', num)
    if(num === 2){
      this.products = this.product.earphones;
      console.log(this.products);
      $state.reload();
      x = 2;
    }
    else if (num === 1) {
      this.products = this.product.headphones;
      $state.reload();
      x = 1;
    }
  }
})
