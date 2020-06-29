const CatModel = require('../../models/cat')

const addliked = async (catIdOwn, catIdLiked) => {
    try{
        const cat = await CatModel.findById(catIdOwn)
        cat.cats_likes.push(catIdLiked)
        cat.save()
        return { status: 1, cat}
    }catch(err){
        return {status: 2, msg: 'cat liked not added to interactions'}
    }

}

module.exports = addliked