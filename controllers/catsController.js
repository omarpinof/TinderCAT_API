const loginService = require('../services/cats/login-service')
const signupService = require('../services/cats/signup')
const addInterestService = require('../services/cats/add-interest')
const removeInterestService = require('../services/cats/remove-interest')
const updatePreferencesService = require('../services/cats/update-preferences')
const likedService = require('../services/cats/add-liked')
const unlikedService = require('../services/cats/add-unliked')
const catListService = require('../services/cats/cat-list-preferences')
const autologinService = require('../services/cats/autologin')

const login = async (req, res) => {
    const email = req.query.email
    const password = req.query.password
    const response = await loginService(email, password)
    res.json(response)

    /* res.json({ "status": 1, "token": "YYY-ZZZ-PPP" })*/
}

const signup = async (req, res) => {
    const cat = req.body
    const response = await signupService(cat)
    res.json(response)
}

const autologin = async(req, res) => {
    const { catId } = req.query
    const response = await autologinService(catId)
    res.json(response)
}

const catList = async (req, res) => {
    const { catId } = req.query
    const response = await catListService(catId)
    res.json(response)
}

const liked = async (req, res) => {
    const { catId, catIdLiked } = req.body
    const response = await likedService(catId, catIdLiked)
    res.json(response)
}

const unliked = async (req, res) => {
    const { catId, catIdUnliked } = req.body
    const response = await unlikedService(interaction)
    res.json(response)
}

const addInterest = async (req, res) => {
    const {catId, interestId} = req.body
    const response = await addInterestService(catId, interestId)
    res.json(response)
}

const removeInterest = async (req, res) => {
    const {catId, interestId} = req.body
    const response = await removeInterestService(catId, interestId) 
    res.json(response)
}

const updatePreferences = async (req, res) => {
    const { preferences } = req.body
    const { catId } = req.query
    const response = await updatePreferencesService(catId, preferences)
    res.json(response)
}

module.exports = {
    login,
    signup,
    autologin,
    catList,
    liked,
    unliked,
    addInterest,
    removeInterest,
    updatePreferences
}