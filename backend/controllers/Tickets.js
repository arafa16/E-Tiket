import Tickets from "../models/TicketModel.js";
import Users from "../Models/UserModel.js";
import {Op} from "sequelize";

export const getTickets = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Tickets.findAll({
                attributes:['uuid','request','status'],
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Tickets.findAll({
                where:{
                    userId: req.userId
                },
                attributes:['uuid','request','status'],
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTicketById = async(req, res) => {
    try {
        const ticket = await Tickets.findOne({
            where:{
                uuid:req.params.id
            }
        });
        if(!ticket) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Tickets.findOne({
                attributes:['uuid','request','status'],
                where:{
                    id: ticket.id
                },
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Tickets.findOne({
                attributes:['uuid','request','status'],
                where:{
                    [Op.and]: [{id: ticket.id}, {userId: req.userId}]
                },
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createTicket = async(req, res) => {
    const {request} = req.body;
    try {
        await Tickets.create({
            request: request,
            status: "pengajuan",
            userId: req.userId
        });
        res.status(200).json({msg: "Ticket created success"})
    } catch(error){
        req.status(500).json({msg: error.message});
    }
}

export const updateTicket = async(req, res) => {
    try {
        const ticket = await Tickets.findOne({
            where:{
                uuid:req.params.id
            }
        });
        if(!ticket) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {request, status} = req.body;
        if(req.role === "admin"){
            await Tickets.update({request, status},{
                where:{
                    id: ticket.id
                }
            });
        }else{
            if(req.userId !== ticket.userId) return res.status(403).json({msg: "akses terlarang"});
            await Tickets.update({request, status},{
                where:{
                    [Op.and]: [{id: ticket.id},{userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Ticket updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteTicket = async(req, res) => {        
    try {
        const ticket = await Tickets.findOne({
            where:{
                uuid:req.params.id
            }
        });
        if(!ticket) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {request, status} = req.body;
        if(req.role === "admin"){
            await Tickets.destroy({
                where:{
                    id: ticket.id
                }
            });
        }else{
            if(req.userId !== ticket.userId) return res.status(403).json({msg: "akses terlarang"});
            await Tickets.destroy({
                where:{
                    [Op.and]: [{id: ticket.id},{userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Ticket deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}