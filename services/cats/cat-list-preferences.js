const CatModel = require('./../../models/cat')

const listCats = async (catId) => {
  try {
    const catLogged = await CatModel.findById(catId)
    const excludeCatsIds = [
      catLogged.id, catLogged.cats_likes, catLogged.cats_unlikes, catLogged.cats_matches
    ]
     
    const minPreferenceAge = catLogged.preferences.ageMin
    const maxPreferenceAge = catLogged.preferences.ageMax

    const currentDate = new Date()
    const dateTo = currentDate.setFullYear(currentDate.getFullYear() - minPreferenceAge)
    const dateFrom = currentDate.setFullYear(currentDate.getFullYear() - maxPreferenceAge)
    
    const catsAvailable = await CatModel.find({
      gender: catLogged.preferences.gender,
      birthday: { $gte: dateFrom, $lte: dateTo },
      interests: { $in: catLogged.interests },
      _id: { $nin: excludeCatsIds }
    })

    return { status: 1, catsAvailable }
  } catch (err) {
    return { status: 2, msg: 'Error list cats' }
  }
}

module.exports = listCats