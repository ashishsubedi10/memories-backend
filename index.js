import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postsRoutes from './routes/posts.js'
import dotenv from 'dotenv'



dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postsRoutes)
app.use('/', (req, res) => {
    res.send('Hello from memories api')
})


const PORT = process.env.PORT


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`)))
    .catch((error) => console.log(error))
mongoose.set('useFindAndModify', false)