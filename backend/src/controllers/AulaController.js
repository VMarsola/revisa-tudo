const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const aulas = await connection('aulas').select('*');
        return res.json(aulas);
    },

    async create(req, res) {
        const { lesson } = req.body;

    
    await connection('aulas').insert({
        lesson,
    })

    return res.json({lesson}); 
    }
}