

import mongoose from 'mongoose'
import { IProductV2 } from '../interfaces/product'

const orderSchema = new mongoose.Schema({

  cart: {
    type: Array,
    default: []
  },
  count: Number,
  total: Number,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Order = mongoose.model('Order',orderSchema)
export default Order
