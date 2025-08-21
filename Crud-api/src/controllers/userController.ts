import { Request, Response } from "express";
import prisma from "../db";


export const SignUp = async(req:Request, res:Response)=>{
        try {
                const user  = await prisma.user.create({
                        data:{
                                email:req.body.email,
                                firstName:req.body.firstName,
                                lastName:req.body.lastName,
                                password:req.body.password,
                        }
                })
                return res.status(201).json({
                        message:"User created succesfully",
                        data:user
                })
        } catch (error) {
                console.log(error);
                return res.status(401).json({
                        message:"failed to craete user",
                        error:error
                })
        }
}

export const getById = async(req:Request, res:Response)=>{
        try {
               const iid = req.body.id;
               const userId = parseInt(iid);

               const user = await prisma.user.findUnique({
                   where: {
                       id: userId, 
                   },
               });
       
               if (!user) {
                   return res.status(404).json({
                       message: "User not found",
                   });
               }
       
               return res.status(200).json({
                   message: "User found successfully",
                   data: user,
               });
        } catch (error) {
                console.log(error);
                return res.status(401).json({
                        message:"failed to craete user",
                        error:error
                })
        }
}

export const getAll = async (req:Request,res:Response)=>{
        try {
                const user = await prisma.user.findMany();
                return res.status(201).json({
                        message:"All users",
                        data:user
                })
        } catch (error) {
                console.log(error);
                return res.status(401).json({
                        message:"Failed to fetch all user",
                        error:error
                })
        }
}