const InterestModel = require('../../models/Interest')

const newInterest = async (interestData) => {
    try{
        const interest = await InterestModel(interestData).save()
        return {status: 1, interest}
    } catch(err){
        return { status: 2, err }
    }

}

module.exports = newInterest