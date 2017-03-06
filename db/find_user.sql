select *
from users
where email = $1 and auth0id = $2
