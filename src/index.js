const express =require('express');
const app = express();
const morgan =require('morgan');


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev')); //app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/user',require('./routes/user'));
//Inicio de servidor
app.listen(app.get('port'), function(){
   console.log('Server en puerto '+ app.get('port'));

});