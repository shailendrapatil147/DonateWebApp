import gql from 'graphql-tag';

export const WorkTypeList = gql`     
      query worklist{
        workType{    
            name           
        }
      }  
     `;

export class workType{
    public constructor(){
    }

    private _workTypeId:number;
    private _name: String;   
    private _description: String; 

    get workTypeId():number {
    return this._workTypeId;
    }
    set workTypeId(workTypeId:number) {
        this._workTypeId = workTypeId;
    }
        
    get name(): String{
        return this._name;
    }
    set name(name: String){
        this._name = name;
    }
  
    get description(): String{
        return this._description;
    }

    set description(description: String){
        this._description = description;
    } 
   
}