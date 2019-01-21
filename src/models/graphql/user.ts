import gql from 'graphql-tag';

export const userFragment =gql`
                        fragment user on UserType{
                                    id
                                    firstName
                                    lastName
                                    email
                                    password
                                    phoneNumber
                                    role_Id
                                    address
                        }`;

export const loginUser = gql`query user($email: String!, $password : String!){
                                        user(email: $email, password: $password){
                                        ...user
                                        }
                            }
                            
                            ${userFragment}`;

export class User{
    public constructor(){
    }

    private _id:number;
    private _firstName: String;
    private _lastName: String;
    private _email: String;
    private _phoneNumber: String;
    private _role_Id: number;
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

    get role_Id(): number{
        return this._role_Id;
    }
    set role_Id(role_Id: number){
        this._role_Id = role_Id;
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
}