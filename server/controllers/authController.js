module.exports.getSignUp = (req, res) => {
    res.redirect("/signup")
}

module.exports.postSignUp = (req, res) => {
    res.send("new signup")
}

module.exports.getLogin = (req, res) => {
    res.redirect("login")
}

module.exports.postLogin = (req, res) => {
    res.send("user login")
}