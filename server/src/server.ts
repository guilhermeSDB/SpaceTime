import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST, PUT, DELETE

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

// API RESTful

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('🔥 HTTP Server running on http://localhost:3333'))
