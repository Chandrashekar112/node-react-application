/**
 * External Module References
 */
import express,{Request,Response} from 'express'
import {FeatureService} from '../services/features.service'
import {DefaultFeature,Feature} from '../models/feature.interface'

/**
 * Router Configuration
 */
export const featureRouter=express.Router();

/**
 * Controller Definitions
 */
const featureServiceInstance = new FeatureService();

featureRouter.get("/",async (req:Request,res:Response)=>{

        try{
            const features:Feature[]=await featureServiceInstance.getAll();
            res.status(200).send(features);
        }catch(e){
            res.status(500).send(e.message);
        }
});



//get features/:id
//post feattures
//put features/:id
//delete features/:id"

