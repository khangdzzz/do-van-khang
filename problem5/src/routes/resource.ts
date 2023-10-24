import express from 'express'
import { body } from 'express-validator'
import {
  createResource,
  filterByName,
  detailResource,
  updateResource,
  deleteResource
} from '../controllers/resource.controller'
import { validateBody } from '../middleware/validate'

const router = express.Router()

const createResourceValidate = [
  body('name').isString(),
  body('email').isEmail(),
  body('gender').isString(),
  body('age').isInt()
]

const filterByNameValidate = [body('name').isString()]

const updateResourceValidate = [
  body('id').isString(),
  body('name').isString().optional(),
  body('email').isEmail().optional(),
  body('gender').isString().optional(),
  body('age').isInt().optional()
]

router.post('/create', createResourceValidate, validateBody, createResource)
router.post('/filter-by-name', filterByNameValidate, validateBody, filterByName)
router.get('/detail-resource', detailResource)
router.put('/update', updateResourceValidate, validateBody, updateResource)
router.delete('/:id', deleteResource)

export default router
