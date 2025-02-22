import { z } from 'zod'

export const carValidationSchema = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.number().int().min(1886, 'Year must be 1886 or later'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
  inStock: z.boolean(),
  createdAt: z.date().optional(), // Timestamps from Mongoose
  updatedAt: z.date().optional(),
})

export default carValidationSchema
