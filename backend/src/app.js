import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// Routes
import userRoutes from './routes/User.routes'

const app = express()

// Settings
app.set('port', 4000)

// Middlewares ( Funciones intermedias entre una petición y una respuesta )
app.use(morgan('dev')) // Peticiones en consola
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/users',userRoutes)

export default app