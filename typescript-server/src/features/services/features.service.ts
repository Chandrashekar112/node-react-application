import { findSourceMap } from 'node:module';
import {DefaultFeature,Feature} from '../models/feature.interface'
import {Features} from '../models/features.items.interface'

let features:Features={
    1:{id:1,name:"F1",description:'Feature One'},
    2:{id:2,name:"F2",description:'Feature Two'},
    3:{id:3,name:"F3",description:'Feature Three'},
}

export class FeatureService{

 constructor(){}
  async getAll():Promise<Feature[]>{

      return  Object.values(features);

  }
  
  async get(id:number):Promise<Feature>{

    return features[id];
  }
  
  async addNewFeature(newFeatue:DefaultFeature):Promise<Feature>{
      const id=new Date().valueOf();
      features[id]={ id, ...newFeatue};
      return features[id];
    }
    
  async remove(id:number):Promise<null|void>{
      const feature=await this.get(id);
      if(!feature){
          return null;
      }
    delete features[id];

  }
  async update(id:number,featureUpdate:DefaultFeature):Promise<Feature|null>{
      return null;
  }
}