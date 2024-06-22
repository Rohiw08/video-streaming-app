import cors from 'cors'
import exxpress from 'express';
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
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