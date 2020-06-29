const InterestModel = require('../../models/Interest')

const getInterests = async () => {
    try{
       const interests = await InterestModel.find()
       return { interests: interests }
    } catch(err){
        return { status: 2, err }
    }

}

module.exports = getInterests