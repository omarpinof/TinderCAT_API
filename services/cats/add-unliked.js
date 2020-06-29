const CatModel = require('../../models/cat')

const addUnliked = async (catIdOwn, catIdUnliked) => {
    try{
        const cat = await CatModel.findById(catIdOwn)
        cat.cats_unlikes.push(catIdUnliked)
        cat.save()
        return { status: 1, cats_unlikes }
    }catch(err){
        return {status: 2, msg: 'cat unliked not added to interactions'}
    }

}

module.exports = addUnliked
