const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json');


router.get('/', (req, res) => {
    res.json(movies);

});

router.post('/', (req, res) => {
    console.log(req.body);
    const { tittle, director, year, rating } = req.body;
    if (tittle && director && year && rating) {

        var id = parseInt(movies[movies.length - 1].id) + 1;
        console.log(id);
        const newMovie = { id, ...req.body };
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).send("error");
    }


});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { tittle, director, year, rating } = req.body;
    if (tittle && director && year && rating) {
        _.each(movies, (mov, i) => {
            if (mov.id == id) {
                mov.tittle = tittle;
                mov.director = director;
                mov.year = year;
                mov.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).send("error");

    }


});


router.delete('/:id', (req, res) => {
    var eliId;
    const { id } = req.params;
    _.each(movies, (mov, i) => {
        if (mov.id == id) {
            eliId = id;
        }
    });
    if (eliId) {
        movies.splice(eliId, 1);
    }

    res.send(movies);
});


module.exports = router;
