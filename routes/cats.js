const router = require('express').Router()
const { login, signup, catList, liked, unliked, 
    addInterest, removeInterest, updatePreferences, autologin 
} = require('./../controllers/catsController')
const authMiddleware = require('../middleware/verify-auth')

router.get('/Login', login)
router.post('/Signup', signup)
router.post('/autologin', authMiddleware, autologin)

router.get('/', authMiddleware, catList)
router.post('/Liked', liked)
router.post('/Unliked', unliked)
router.post('/Interest', addInterest)
router.delete('/Interest', removeInterest)
router.put('/Preferences', authMiddleware, updatePreferences)

module.exports = router
