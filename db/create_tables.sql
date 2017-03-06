create table if not exists users(
  userId serial primary key,
  auth0id text,
  email varchar(500)

);

create table if not exists products(
  productId serial primary key,
  name varchar(8000),
  type varchar(8000),
  imgurl varchar(8000),
  description varchar(8000),
  features varchar(8000),
  price varchar(8000),
  height varchar(8000)
);

-- create table if not exists orders(
--   orderId serial primary key,
--   userId integer references users(userId),
--   qty integer,
--   orderTotal integer,
--   productId integer references products(productId),
--   completed boolean
-- );

create table if not exists cart(
  cartId serial primary key,
  -- orderId integer references orders(orderId),
  productId integer references products(productId),
  userId integer references users(userId),
  qty integer,
  total integer
);


-- Insert into products (name, type, imgurl, description, features, price, height)
-- Values
-- ('Beats Solo3 Wireless', 'headphones', 'images/products/_0001_MNEN2-RGB-bttm.png.large.2x.png', 'Designed for Sound. Tuned for Emotion', 'Connect via Class 1 Bluetooth® with your device for wireless listening^The award-winning sound and design you’ve come to love from Beats^Up to 40 hours of battery life for multi-day use^With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low', '299.95', '600px'),
-- ('Beats Studio Wireless', 'headphones', 'images/products/_0000_MP1F2-RGB-bttm.png.large.2x.png', 'Feel the Music. Not the Wires', 'Pair and play with your Bluetooth® device for wireless listening^Dual-mode Adaptive Noise Canceling^Award-winning Beats sound^Up to 12 hours of battery life', '379.95', '600px'),
-- ('Beats EP', 'headphones', 'images/products/ep_pcp_1292x1480.png.large.2x.png', 'Start Listening. Enter Premium Sound', 'Fine-tuned acoustics for the clarity and depth you expect from Beats^Durable, lightweight design reinforced with stainless steel^Battery-free for unlimited playback^Adjustable vertical sliders for a personalized fit', '99.95', '600px'),
-- ('Beats Solo 2', 'headphones', 'images/products/_0003_overear-solo2-black-rgb-thrqrtleft.png.large.2x.png', 'Designed for Sound. Tuned for Emotion', 'Award-winning Beats sound^Streamlined design for a flexible fit^Durable and foldable so you can take them on the go', '199.95', '555px'),
-- ('Beats Pro', 'headphones', 'images/products/_0002_overear-pro-black-rgb-thrqrtleft.png.large.2x.png', 'The Revolution in Sound', 'Clear highs and deep lows for premium sound quality^Rotating ear cups^Durable housing and cushioned headband for long hours in the studio', '399.95', '555px'),
-- ('Beats x', 'earphones', 'public/images/products/earphones/_0005_ML8V2-RGB-custom3.png.large.2x.png', 'Talk. Listen. Beats', 'Connect via Class 1 Bluetooth® with your device for wireless^Up to 8 hours of battery life for when you’re on the go^With Fast Fuel, a 5-minute charge gives you 2 hours of playback when battery is low^Variety of eartip options offer personalized comfort and secure-fit wingtips provide stability^Flex-Form cable provides all-day comfort with easy purse and pocket portability^Authentic, clear acoustics deliver crisp sound fit for your life', '149.95', '710px'),
-- ('Powerbeats3 Wireless', 'earphones', 'public/images/products/earphones/_0005_ML8V2-RGB-custom3.png.large.2x.png', 'Performance. Power. Freedom.', 'Connect via Class 1 Bluetooth® with your device for wireless workout freedom^Up to 12 hours of battery life to power through multiple workouts^With Fast Fuel, a 5-minute charge gives you 1 hour of playback when battery is low^Sweat and water resistance to handle tough training^Flexible, secure-fit earhooks maximize comfort and stability^Take calls, control your music and activate Siri with RemoteTalk', '199.95', '700px'),
-- ('urBeats', 'earphones', 'public/images/products/earphones/_0006_inear-urbeats-black-rgb-thrqrtleft.png.large.2x.png', 'Upgrade Your Sound', 'Deep bass, soaring highs, and clear midrange^Solid metal housing creates an undisturbed listening experience^Take calls and control music with RemoteTalk cable', '99.95', '565px')
