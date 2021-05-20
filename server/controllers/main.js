const usersDb = require('../schemas/usersSchema')

module.exports = {
    createUser: (req, res) => {
        console.log(req.body)
        let user = new usersDb
        user.userName = req.body.name
        user.userAge = req.body.age
        user.userEmail = req.body.email
        user.userPassword = req.body.password
        user.save().then(() => {
            res.send({error: false, message: "User created successfully"})
        }).catch(e => {
            res.send({error: true, message: "There was an error", mistake: e})
        })
    },
    editUser: async (req, res) => {
        console.log(req.body)
        await usersDb.findOneAndUpdate(
            {_id: req.body.id}, {
                userName: req.body.name,
                userAge: req.body.age,
                userEmail: req.body.email,
                userPassword: req.body.password
            })
        res.send({error:false, message: "SVEIKI"})

    },
    getUsers: async (req, res) => {
        let users = await usersDb.find({})
        res.send({users})
    },
    deleteUser: async (req, res) => {
        usersDb.findOneAndRemove({_id: req.params.key})
            .then(user => {
                res.send({deleted: true})
            }).catch(e => {
            console.log(e)
        })

    }

}