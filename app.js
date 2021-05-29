const express = require('express');
const app = express();
const {addOrUpdateCharacter} = require('./dynamo');

app.use(express.json());

app.post('/characters', async(req, res) =>{
    const characters = req.body;
    try {
        const newCharacter = await addOrUpdateCharacter(character);
        res.json(newCharacter);
        //Aqui se cambia para cada parametro que quieres
    } catch(error) {
        console.error(err);
        res.status(500).json({err: 'Something went wrong'});
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port');
});