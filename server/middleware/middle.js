async function middleware (req, res, next){

    function errorMessage(message) {
        return res.send({error: true, message})
    }

    if (req.body.name.length < 3) {
        return errorMessage("Vartotojo vardas privalo būti ilgesnis nei 3 simboliai")
    }
    if (!Number(req.body.age)) {
        return errorMessage("Vartotojo amžius privalo būti skaičius")
    }
    if (req.body.age > 99) {
        return errorMessage("Vartotojo amžius negali būti didesnis nei 99 metai")
    }
    if (req.body.age < 10) {
        return errorMessage("Vartotojo amžius negali būti mažesnis nei 10 metų")
    }
    if (!req.body.email.includes("@")) {
        return errorMessage("Vartotojo el. paštas neteisingas. Privalomas @ ženklas ")
    }
    if (!req.body.email.includes(".")) {
        return errorMessage("Vartotojo el. paštas neteisingas. Privalomas . ženklas ")
    }

    return next()
}

module.exports = middleware