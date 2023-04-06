const router = require('express').Router();
const test = "true"

router.get('/', async (req, res) => {
    res.render('homepage', {})
})

module.exports = router;