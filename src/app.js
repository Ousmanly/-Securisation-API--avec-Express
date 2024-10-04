import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
const app = express()
const port = 3000


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
	limit: 5,
    message: "Try after one minute"
})

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};
  
app.use(cors(corsOptions));
app.use(limiter)
app.use(helmet())


app.get('/api/hello',function (_req, res) {
  res.json({"message": "Hello world"})
})

app.listen(port, ()=>{
    console.log('The application is running in port ',port);
})