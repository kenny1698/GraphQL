import { getProductosDao }  from '../daos/productos/index.js';
import Producto from '../modelos/Producto.js';
import crypto from 'crypto'

//const ProductosApi = getProductosDao()

export default class ProductosApi {
    constructor() {
        this.dao = new getProductosDao()
    }

    getProductos = () => {
        return this.dao.listarAll();
    }

    createProducto = ({ datos }) => {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevoProducto = new Producto(id, datos)
        this.dao.guardar(nuevoProducto);
        return nuevoProducto;
    }
}