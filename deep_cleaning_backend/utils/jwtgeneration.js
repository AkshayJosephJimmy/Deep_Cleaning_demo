import jwt from 'jsonwebtoken';



function jwtgeneration(user){

    const token =jwt.sign({userId:user.id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    });

    return token;



}
export default jwtgeneration;