import gql from 'graphql-tag';

export const workFragment =gql`
                        fragment work on WorkType{
                                    workId
                                    description
                                    endDate
                                    startDate
                                    title
                                    workTypeId
                        }`;

export const getWorkById = gql`query  GetWorkById($workId:Int!){
                                    getWorkById(workId: $workId){
                                    ...work
                                    }
                                }
                            ${workFragment}`;

export const Works = gql`query works {
                              work{    
                                  title,  
                                  startDate,
                                  endDate,
                                  description,
                                  workId
                              }
                            }`;

export const addWork = gql`mutation addWork($addWork:WorkInputType!){
                                addAsync(addWork: $addWork){
                                    workId
                                    description
                                    endDate
                                    startDate
                                    title
                                    workTypeId
                                    ngoId
                                }
                              }`;

export class Work{
    public constructor(){
    }

    private _workId:number;
    private _title: String;
    private _description: String;
    private _workTypeId: number;
    private _nogId: number;
    private _startDate: Date;
    private _endDate: Date;
  
    get workId():number {
      return this._workId;
    }
    set workId(workId:number) {
        this._workId = workId;
    }

    get title(): String{
        return this._title;
    }
    set title(title: String){
        this._title = title;
    }

    get description(): String{
        return this._description;
    }
    set description(description: String){
        this._description = description;
    }

    get startDate(): Date{
        return this._startDate;
    }
    set startDate(startDate: Date){
        this._startDate = startDate;
    }

    get endDate(): Date{
        return this._endDate;
    }
    set endDate(endDate: Date){
        this._endDate = endDate;
    }

    get workTypeId():number {
    return this._workTypeId;
    }
    set workTypeId(workTypeId:number) {
        this._workTypeId = workTypeId;
    }

    get ngoId():number {
    return this._nogId;
    }
    set ngoId(ngoId:number) {
        this._nogId = ngoId;
    }

    public toJSON(): any {
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = {};
      
        Object.entries(Object.getOwnPropertyDescriptors(proto))
          .filter(([key, descriptor]) => typeof descriptor.get === 'function')
          .map(([key, descriptor]) => {
            if (descriptor && key[0] !== '_') {
              try {
                const val = (this as any)[key];
                jsonObj[key] = val;
              } catch (error) {
                console.error(`Error calling getter ${key}`, error);
              }
            }
          });
      
        return jsonObj;
      }
}