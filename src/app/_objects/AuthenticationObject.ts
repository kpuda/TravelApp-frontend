export interface AuthenticationObject {
    username:string;
    statusCode:number;
    accessToken:string;
    roles:Array<string>;
}