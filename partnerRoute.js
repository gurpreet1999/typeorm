// routes/partnerRoutes.js
const express = require('express');
const {  createEquipment} = require('./Controller/partner.js');

const router = express.Router();

// Route to create a partner with skills
// router.post('/partners', createPartnerWithSkills);
router.post('/create',createEquipment);

module.exports = router;
