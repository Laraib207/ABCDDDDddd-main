import { defineConfig } from '@prisma/cli'

export default defineConfig({
  datasource: {
    db: {
      url: 'mongodb+srv://laraibsiddiqui10ki:<db_password>@project1-initial.jdobdkq.mongodb.net/?appName=Project1-Initial' // या अगर MongoDB: process.env.DATABASE_URL
    }
  }
})
