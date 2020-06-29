const CatModel = require('../../models/cat')

const updatePreferences = async (catId, Preferences) => {
    try{
        const update = { $set: { preferences: preferences } }
        const response = await CatModel.findByIdAndUpdate({ catId, update })
        return { status: 1, preferences }
    }catch(err){
        return {status: 2, msg: 'Preference not updated'}
    }
}

module.exports = updatePreferences