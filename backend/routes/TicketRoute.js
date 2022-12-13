import express from 'express';
import {
    getTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
} from '../controllers/Tickets.js';
import { verifyUser, adminOnly } from '../meddleware/AuthUser.js';
const router = express.Router();

router.get('/tickets', verifyUser, getTickets);
router.get('/tickets/:id', verifyUser, getTicketById);
router.post('/tickets', verifyUser, createTicket);
router.patch('/tickets/:id', verifyUser, updateTicket);
router.delete('/tickets/:id', verifyUser, deleteTicket);

export default router;