insert into users (email, auth0id)
  values($1, $2)
RETURNING *
