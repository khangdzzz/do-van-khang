import ResourceModel from '../models/resource.model'
import { Resource } from '../interfaces/resource.interface'

export const create = async (body: Resource) => {
  const { email } = body

  const resource = await ResourceModel.findOne({ email })

  if (resource) return null

  const newResource = new ResourceModel(body)
  return await newResource.save()
}

export const filter = async (name: string) => {
  return await ResourceModel.find({
    name: new RegExp(name, 'i')
  })
}

export const getDetailResource = async (id: string) => {
  try {
    return await ResourceModel.findById({ _id: id })
  } catch (e) {
    console.log(e)
  }
}

export const update = async (body: any) => {
  try {
    const { id } = body
    return await ResourceModel.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
  } catch (e) {
    console.log(e)
  }
}

export const deleteResourceById = async (id: string) => {
  try {
    return await ResourceModel.findByIdAndDelete({ _id: id })
  } catch (e) {
    console.log(e)
  }
}
