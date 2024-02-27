import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();

mongoose.connect('mongodb+srv://matiasdelorencdef:contraseña1234@preentrega2cluster.tqnhpbp.mongodb.net/Preentrega2Cluster?retryWrites=true&w=majority&appName=Preentrega2Cluster')

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/api/products',productsRouter);
app.use('/api/cart',cartsRouter)
app.listen(8080,()=>console.log("Listening on PORT 8080"))