import { Schema, model } from 'mongoose'

import { Resource } from '../interfaces/resource.interface'

export const ResourceSchema = new Schema(
  {
    name: { type: String, required: [true, 'Field is required'] },
    email: { type: String, required: [true, 'Field is required'] },
    gender: { type: String, required: [true, 'Field is required'] },
    age: { type: Number, required: [true, 'Field is required'] }
  },
  { versionKey: false }
)

const Resource = model<Resource>('resource', ResourceSchema)

export default Resource
