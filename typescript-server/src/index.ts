/**
 * Required External Modules
 */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {featureRouter} from './features/routers/feature.router'

dotenv.config(); // process.env
/**
 * App Varialbles
 */
if(!process.env.PORT){
    process.exit(1);
}
const PORT=parseInt(process.env.PORT as string);
const app=express();
/**
 * App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/features",featureRouter);
/**
 * Server Activation
 */
if(require.main===module){
app.listen(PORT,()=>{

    console.log(`Web Server Listening on port ${PORT}`);
});
}
export default app;