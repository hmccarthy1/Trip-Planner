const router = require("express").Router();
const spring = require("../models/Spring");
const withAuth = require('../utils/auth');

router.use(express.json());

// router.get('/spring', withAuth async(req, res) => {
//   // find a single spring by its `id`
//   try{
//     const springId = await Spring.findByPk(req.params.id,{
//       include: [{
//            model: Spring
//         }]
//     });

//     res.status(200).json(springId);

//   }catch(err){
//     res.status(400).json(err);
//   }

// });

module.exports = router;