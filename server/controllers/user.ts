import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'
import UserModel from '../models/user'
import type { Request, Response } from 'express'
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })

const secret = process.env.SECRET

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const oldUser = await UserModel.findOne({ email })
    if (!oldUser) return res.status(404).json({ message: "User does't exist" })

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' })

    res.status(200).json({ result: oldUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.error(error)
  }
}

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body

  try {
    const oldUser = await UserModel.findOne({ email })
    if (oldUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1h' })
    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.error(error)
  }
}
