const booksModel = require("./../model/Book")

exports.getAll = async (req, res) => {
    const books = await booksModel.find({}).lean()
    res.json(books)
}

exports.getBook = async (req, res) => {
    if (req.params.id) {
        const {id} = req.params
        let book = null
        if (isValidObjectId(id)) {
            const books = await booksModel.findOne({_id:id}, '-_id ').lean()
    
            if (!books) {
                return res.status(404).json({
                    message:'no book'
                })
            
            }
        }
        else {
            return res.status(422).json({
                message:'not valid bookID'
            })
        }
        res.json(book)
    }
    else{
        const books = await booksModel.find({}).lean()
        res.json(books)
    }

}