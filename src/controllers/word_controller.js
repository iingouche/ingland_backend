const db = require('../config/db')

exports.getWords = async(req, res) => {
    try {
        const words = await db('words').select('*');
        res.json(words);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getWordById = async(req, res) => {
    const { id } = req.params;
    try {
        const word = await db('words').where({ id }).first();
        if (!word) {
            return res.status(404).json({ error: 'Word not found' });
        }
        return res.json(word);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
 }