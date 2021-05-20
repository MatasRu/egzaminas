async function middleware (req, res, next){

    function errorMessage(message) {
        return res.send({error: true, message})
    }

    if (req.body.name.length < 3) {
        return errorMessage("User Name is too short, it should be more then 3 characters")
    }
    if (!Number(req.body.age)) {
        return errorMessage("User Age must be a number")
    }
    if (!req.body.email.includes("@") && !req.body.email.includes(".")) {
        return errorMessage("Email address should have @ and . symbols")
    }

    return next()
}

module.exports = middleware