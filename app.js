import  express  from 'express';
import {routerss} from './router.js'

const app = express();
app.get('/', (req, res)=>{
    res.send('hola')
})
app.set('view engine', 'ejs')
//--------------------{ruta padre}
app.use('/', routerss )


//-------------{config port server}
app.listen(3000, ()=>{
    console.log('Server run on port 3000');
})