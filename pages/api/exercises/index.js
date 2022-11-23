import {exercises} from '../../../data/exercises'
export default function handler(req, res) {
    res.status(200).json(exercises)
  }