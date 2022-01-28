import ProductosApi from '../api/ProductosApi.js';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  input ProductoInput {
    title: String,
    price: Float,
    thumbnail: String
  }
  type Producto {
    id: ID!
    title: String,
    price: Float,
    thumbnail: String
  }
  type Query {
    getProductos: [Producto],
  }
  type Mutation {
    createProducto(datos: ProductoInput): Producto
  }
`)


export default class GraphQLController {
    constructor() {
        const api = new ProductosApi()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getProductos: api.getProductos,
                createProducto: api.createProducto
            },
            graphiql: true,
        })
    }
}