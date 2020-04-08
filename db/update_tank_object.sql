UPDATE tanks
SET model = ${model}, weight = ${weight}, country = ${country}
WHERE id = ${id}
returning *;