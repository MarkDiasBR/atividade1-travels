import { query } from "express";
import { dbGetTravels } from "../repositories/travels.repository.js";

export async function getTravels(req, res){
    let { page, name } = req.query;
    if (!page) page = 1
    if (!name) name = '_'

    console.log( page, name )

    try {
        if ( Number(page) <= 0 || !Number.isInteger(Number(page)) || isNaN(page) || !isNaN(name) ) return res.status(400).send({ error:"Bad Request" } )

        const travels =  await dbGetTravels(page,name);
        console.log(travels.rows)
        return res.status(200).send({ travels })
    } catch (err) {
        return res.status(500).send({ error: "Internal server error" });
    }
} 
