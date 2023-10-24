import express from 'express'
import resource from './resource'

export const router = express.Router()

router.use('/v1/resource', resource)
