import express  from "express";
import { PrismaClient } from "@prisma/client";
const  routers = express.Router();
const prisma = new PrismaClient()

//-------------{Creacion de una ruta hijo}
routers.get('/contact', async(req, res)=>{
  const showdata = await prisma.users.findMany()
  res.send(showdata)
})

export const routerss = routers