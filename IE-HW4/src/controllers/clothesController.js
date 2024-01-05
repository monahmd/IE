const Clothes = require('../models/clothes');

const addClothes = async (req, res) => {
    try {
        const { name, material, price, discount } = req.body;
        const newClothes = await Clothes.create({ name, material, price, discount });

        res.status(201).json({ clothes: newClothes });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getClothes = async (req, res) => {
    try {
        const clothes = await Clothes.findById(req.params.id);

        if (!clothes) {
            return res.status(404).json({ message: 'Clothes not found' });
        }

        res.json({ clothes });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteClothes = async (req, res) => {
    try {
        const clothes = await Clothes.deleteOne({_id: req.params.id});

        if (!clothes) {
            return res.status(404).json({ message: 'Clothes not found' });
        }

        res.json({ clothes });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteAllClothes = async (req, res) => {
    try {
        const clothes = await Clothes.deleteMany();

        if (!clothes) {
            return res.status(404).json({ message: 'Clothes not found' });
        }

        res.json({ clothes });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const editClothes = async (req, res) => {
    try {
        const clothes = await Clothes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});

        if (!clothes) {
            return res.status(404).json({ message: 'Clothes not found' });
        }

        res.json({ clothes });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getFinalPriceClothes = async (req, res) => {
    try {
        const clothes = await Clothes.findOne({_id: req.params.id});

        if (!clothes) {
            return res.status(404).json({ message: 'Clothes not found' });
        }

        const final_price = clothes.price - (clothes.price * (clothes.discount / 100));

        res.json({ final_price:  final_price});
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    addClothes,
    getClothes,
    deleteClothes,
    deleteAllClothes,
    editClothes,
    getFinalPriceClothes
};
