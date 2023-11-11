const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    console.log('Request received at /api/contacts');
    res.status(2020).json({ 'message': 'get all routes' });
});
router.route('/').post((req, res) => {
    res.json({ 'message': 'add all routes' })
});
router.route('/:id').get((req, res) => {
    res.json({ 'message': `get contact for: ${req.params.id}` })
});
router.route('/:id').put((req, res) => {
    res.json({ 'message': `update info of: ${req.params.id}` })
});
router.route('/:id').delete((req, res) => {
    res.json({ 'message': `delete info of: ${req.params.id}` })
});

module.exports = router;