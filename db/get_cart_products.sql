select * from products
join cart on products.productid = cart.productid
where cart.userid = $1;
