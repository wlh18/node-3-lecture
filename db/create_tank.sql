INSERT INTO tanks (model, weight, country)
VALUES ($1, $2, $3)
returning *;