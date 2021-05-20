async function middleware (req, res, next){

    function errorMessage(message) {
        return res.send({error: true, message})
    }

    if (req.body.name.length < 3) {
        return errorMessage("User Name is too short, it should be more then 3 characters")
    }


    return next()
}

module.exports = middleware