import mongoose from "mongoose";
const userSchema= new Schema({
 username:string,
 password:string,
 confirmpassword:string

})

const User= model('User',userSchema)
export default User