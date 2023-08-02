const { Router } = require('express')
const {getSignUp, postSignUp, getLogin, postLogin} = require("../controllers/authController")

const router = Router()

router.get("/signup", getSignUp)

router.post("/signup", postSignUp)

router.get("/login", getLogin)

router.post("/login", postLogin)

module.exports = router;