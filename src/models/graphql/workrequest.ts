import gql from 'graphql-tag';


export const WorkRequest = gql`     
mutation addWorkRequest($addWorkRequest :AddWorkRequestInputType!) {
    addAsync(addWorkRequest:$addWorkRequest){ 
        workRequestId
        workId
        userId
        isAccepted
        notes
        availableDate
        hrsContribution
    }
  }`;

  export const GetAllWorkRequests =gql`query getAllWorkRequests($workId:Int!){
    getAllWorkRequests(workId:$workId){
      availableDate
      hrsContribution
      isAccepted
      notes
      userId
      workId
      workRequestId
      firstName
    }
  }`;

export class workrequest{
    public constructor(){
    }

private _workId: number;
private _userId: number;    
private _isAccepted: boolean; 
private _notes: string; 
private _availableDate: string;
private _hrsContribution: string;
private _firstName: string;

get workId(): number{
    return this._workId;
}
set workId(workId: number){
    this._workId = workId;
}

get userId(): number{
    return this._userId;
}
set userId(userId: number){
    this._userId = userId;
}    

get isaccepted(): boolean{
    return this._isAccepted;
}

set isaccepted(isaccepted: boolean){
    this._isAccepted = isaccepted;
}

get availableDate(): string{
    return this._availableDate;
}
set availableDate(availableDate: string){
    this._availableDate = availableDate;
}

get hrsContribution(): string{
    return this._hrsContribution;
}
set hrsContribution(hrsContribution: string){
    this._hrsContribution = hrsContribution;
}

get notes(): string{
    return this._notes;
}
set notes(notes: string){
    this._notes = notes;
}

get firstName(): string{
  return this._firstName;
}
set firstName(firstName: string){
  this._firstName = firstName;
}

}

