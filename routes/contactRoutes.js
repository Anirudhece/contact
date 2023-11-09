const express = require('express');
const app = express();
const router = express.Router();
router.route('/').get((req, res) => {
    res.json({ 'message': 'get all routes' })
});
router.route('/').post((req, res) => {
    res.json({ 'message': 'add all routes' })
});
router.route('/:id').get((req, res) => {
    res.json({ 'message': `get info from: ${req.params.id}`})
});
router.route('/:id').put((req, res) => {
    res.json({ 'message': `get info from: ${req.params.id}` })
});
router.route('/:id').delete((req, res) => {
    res.json({ 'message': `delete info from: ${req.params.id}` })
});
module.exports = router;