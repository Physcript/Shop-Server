


import mongoose,{ ObjectId } from 'mongoose'
const commentSchema = new mongoose.Schema({

    body: String,
    name: String,
    email: String,

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

},{ timestamps: true })

const Comment = mongoose.model('Comment',commentSchema)
export default Comment