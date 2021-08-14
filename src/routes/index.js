const {Router} = require ('express');
const router = Router();



// routes
router.get('/test', (req, res)=>{
    const data={
        "name":"Daniela Gonzalez",
        "descripción":"Prueba",
        "text":"Hola mundo"
    }
    res.json(data);

});

module.exports =router;