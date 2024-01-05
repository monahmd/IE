const express = require('express');
const clothesController = require('../controllers/clothesController');
const router = express.Router();

router.post('/add-clothes', clothesController.addClothes);
router.get('/get-clothes/:id', clothesController.getClothes);
router.get('/get-final-price/:id', clothesController.getFinalPriceClothes);
router.delete('/delete-clothes/:id', clothesController.deleteClothes);
router.delete('/delete-all-clothes', clothesController.deleteAllClothes);
router.patch('/edit-clothes/:id', clothesController.editClothes);

module.exports = router;
