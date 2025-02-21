import app from './app'
import config from './app/config'

import mongoose from 'mongoose'

console.log('🚀 Server script started...')

async function main() {
  try {
    console.log('🔗 Attempting to connect to MongoDB...')
    await mongoose.connect(config.database_url as string)
    console.log('✅ Successfully connected to MongoDB!')

    app.listen(config.port, () => {
      console.log(`🚀 Server is running at port:${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
