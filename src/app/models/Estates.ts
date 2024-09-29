import { Document, Schema } from 'mongoose'
import mongoose from 'mongoose'

export interface IEstate extends Document {
  title: string
  price: number
  id: number
  image: string
  purpose: string
  type: string
  area: number
  rooms: number
}

const estateSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  id: { type: Number, required: true },
  image: { type: String, required: true },
  purpose: { type: String, required: true },
  type: { type: String, required: true },
  area: { type: Number, required: true },
  rooms: { type: Number, required: true }
})

export const Estate =
  mongoose.models.Estate || mongoose.model<IEstate>('Estate', estateSchema)
