UPDATE tanks
SET model = $1, weight = $2, country = $3
WHERE id = $4
returning *;