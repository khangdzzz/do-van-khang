import { NextFunction, Request, Response } from 'express'
import { create, filter, update, getDetailResource, deleteResourceById } from '../services/resource.service'

export const createResource = async (req: Request, res: Response, next: NextFunction) => {
  const resource = await create(req.body)

  return resource ? res.send(resource) : res.status(400).send({ message: 'Create resource fail !' })
}

export const filterByName = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body
  const resources = await filter(name)

  return res.send(resources)
}

export const detailResource = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.query.id as string

  const resource = await getDetailResource(id)

  return resource ? res.send(resource) : res.status(404).send({ message: 'Resource id not exist !' })
}

export const updateResource = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body
  const resource = await update(body)

  return resource
    ? res.send({
        message: 'Update success !',
        resource
      })
    : res.status(404).send({ message: 'Update fail !' })
}

export const deleteResource = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const isDelete = await deleteResourceById(id)

  return isDelete ? res.send({ message: 'Delete success !' }) : res.send({ message: 'Delete fail !' })
}
