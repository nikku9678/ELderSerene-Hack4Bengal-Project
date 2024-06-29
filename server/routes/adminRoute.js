import express from 'express';

import { getAllEmployee } from '../controllers/adminController.js';

const router = express.Router();


// appointment routes
router.get("/all-employee",getAllEmployee);

export default router;
