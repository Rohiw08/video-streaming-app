import cors from 'cors'
import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With',
    exposedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With',
    maxAge: 3600,
}));

app.use(express.json({
    extended: true,
    limit: '16kb',
    parameterLimit: 100000,
}));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb',
    parameterLimit: 100000,
}));

app.use(cookieParser());

app.use(express.static("public"));

// routes
import userRouter from './routes/user.routes.js';

// routes declaration
app.use("/users", userRouter);
// http://localhost:XXXX/api/v1/users/register or /login

app.get('/', (req, res) => {
    res.send('Hello World again');
})

export {app}