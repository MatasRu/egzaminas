const usersDb = require('../schemas/usersSchema')

module.exports = {
    createUser: (req, res) => {
        console.log(req.body)
        let user = new usersDb
        user.userName = req.body.name
        user.userAge = req.body.quantity
        user.userEmail = req.body.quantity
        user.userPassword = req.body.password
        user.save().then(() => {
            res.send({error: false, message: "User created successfully"})
        }).catch(e => {
            res.send({error: true, message: "There was an error", mistake: e})
        })
    },
    editUser: async (req, res) => {
        console.log(req.body)
        await productDb.findOneAndUpdate(
            {_id: req.body.id}, {
                quantity: req.body.quantity
            })
        let products = await productDb.find({})
        res.send({products})

    },
    getUsers: async (req, res) => {
        let products = await productDb.find({})
        res.send({products})
    },
    deleteUser: async (req, res) => {
        productDb.findOneAndRemove({_id: req.params.key})
            .then(user => {
                res.send({deleted: true})
                console.log(user)
            }).catch(e => {
            console.log(e)
        })

    }

}