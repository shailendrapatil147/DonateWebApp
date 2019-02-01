import gql from 'graphql-tag';

const addUser =gql`fragment addUser on UserType{
                                        firstName
                                        lastName
                                        email
                                        password
                                        phoneNumber
                                        roleId
                                        address
                            }`;

const userFragment =gql`
                        fragment user on UserType{
                                    id
                                    ...addUser
                        }
                        ${addUser}`;

export const loginUser = gql`query user($email: String!, $password : String!){
                                        user(email: $email, password: $password){
                                            ...user
                                        }
                            }
                            ${userFragment}`;
    
export const registerUser = gql`mutation addAsync($user: AddUserInputType!) {
                                    addAsync(addUser: $user) {
                                        ...addUser   
                                    }
                                }  
                                    ${addUser}`;

export class User{
    constructor(){
    }

    private _id:number;
    private _firstName: String;
    private _lastName: String;
    private _email: String;
    private _phoneNumber: String;
    private _roleId: number;
    private _address: String;
    private _password: String;
  
    get id():number {
      return this._id;
    }
    set id(id:number) {
        this._id = id;
    }

    get firstName(): String{
        return this._firstName;
    }
    set firstName(firstName: String){
        this._firstName = firstName;
    }

    get lastName(): String{
        return this._lastName;
    }
    set lastName(lastName: String){
        this._lastName = lastName;
    }

    get email(): String{
        return this._email;
    }
    set email(email: String){
        this._email = email;
    }

    get phoneNumber(): String{
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber: String){
        this._phoneNumber = phoneNumber;
    }

    get roleId(): number{
        return this._roleId;
    }
    set roleId(roleId: number){
        this._roleId = roleId;
    }

    get address(): String{
        return this._address;
    }
    set address(address: String){
        this._address = address;
    }

    get password(): String{
        return this._password;
    }
    set password(password: String){
        this._password = password;
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