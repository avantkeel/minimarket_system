import IdentifierInterface from "../../valueObjects/IdentifierInterface";

export default class EmployeeEntity{
    employeeid: string;
    userid: IdentifierInterface;
    createdAt: Date;
    constructor (employeeid:string,userid: IdentifierInterface,createdAt: Date){
        this.employeeid = employeeid;
        this.userid = userid;
        this.createdAt = createdAt;
    }
}