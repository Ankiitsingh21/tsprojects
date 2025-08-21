import express,{Request, Response}  from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async(req:Request,res:Response)=>{
        return res.status(201).json({
                message:"succesfully fetched",
        })
});
const PORT = 3000;
app.listen(PORT,()=>{
        console.log(`Server started ${PORT}`);
});



// import { PrismaClient } from '../src/generated/prisma'; // matches your output path

// const prisma = new PrismaClient();

// async function insertUser(email: string, firstName: string, lastName: string, password: string) {
//   const user = await prisma.user.create({
//     data: {
//       email,
//       firstName,
//       lastName,
//       password,
//     },
//   });

//   console.log('User created:', user);
//   return user;
// }

