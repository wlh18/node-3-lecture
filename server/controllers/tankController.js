module.exports = {
  getAllTanks: (req, res) => {
    const db = req.app.get('db')
    db.get_all_tanks().then(tanks => {
      res.status(200).send(tanks)
    })
  },

  createTank: (req, res) => {
    const db = req.app.get('db')
    const { model, weight, country } = req.body

    db.create_tank([model, weight, country]).then(newTank => {
      res.status(200).send(newTank)
    })
  },

  updateTank: (req, res) => {
    const db = req.app.get('db')
    const { model, weight, country } = req.body
    const { id } = req.params

    // db.get_tank_by_id(id).then(tank => {
    //   const newTank = { ...tank[0], ...req.body }
    //   db.update_tank_object(newTank).then(updatedTank => {
    //     res.status(200).send(updatedTank)
    //   })
    // })

    db.update_tank([model, weight, country, id]).then(updatedTank => {
      res.status(200).send(updatedTank)
    })
  },

  deleteTank: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params

    db.delete_tank(id).then(() => {
      res.status(200).send('Tank deleted')
    })
  },
}
