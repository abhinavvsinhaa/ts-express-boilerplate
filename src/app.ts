import express, { application, Express, NextFunction, Request, Response, Router } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { createServer } from "http";
import validationResult from "./configs/validate";

const app: Express = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan(validationResult.value.MORGAN_LOGGER.toString()));

app.enable('strict routing')

const router: Router = express.Router({
    caseSensitive: true,
    strict: true
})

app.use('/v1', router)

export default httpServer;
