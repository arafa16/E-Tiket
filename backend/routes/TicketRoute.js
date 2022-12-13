import express from 'express';
import {
    getTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
} from '../controllers/Tickets.js';

const router = express.Router();

router.get('/tickets', getTickets);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', createTicket);
router.patch('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

export default router;