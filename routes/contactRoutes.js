const express = require('express');
const app = express();
const router = express.Router();

router.route('/').get((req, res) => {
    res.json({ 'message': 'get all request' })
})


module.exports = router;
