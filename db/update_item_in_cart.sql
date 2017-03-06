UPDATE cart
SET qty = $3
WHERE userid = $2
AND productid = $1
RETURNING *;
