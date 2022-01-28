class ContenedorMemoria {
  constructor() {
    this.elementos = []
  }

  listar(id) {
    const elem = this.elementos.find(elem => elem.id == id)
    if (!elem) {
      throw new Error('Error al listar por id: no encontrado')
    } else {
      return elem
    }
  }

  listarAll() {
    return [...this.elementos]
  }

  guardar(newElem) {
    const elems = this.elementos
    this.elementos.push(newElem)
    return newElem
  }

  actualizar(id, newElem) {
    const index = this.elementos.findIndex(p => p.id == id)
    if (index == -1) {
      throw new Error(`Error al actualizar: no se encontró el id ${id}`)
    } else {
      this.elementos[index] = newElem
      return newElem
    }
  }

  borrar(id) {
    const index = this.elementos.findIndex(elem => elem.id == id)
    if (index == -1) {
      throw new Error(`Error al borrar: no se encontró el id ${id}`)
    } else {
      return this.elementos.splice(index, 1)
    }
  }

  borrarAll() {
    this.elementos = []
  }

  getProductos = () => {
        return this.dao.getProductos();
    }

    createProducto = ({ datos }) => {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevoProducto = new Producto(id, datos)
        this.dao.saveProducto(nuevoProducto);
        return nuevoProducto;
    }

    marcarLeidoProducto = ({ id }) => {
        const actualizado = this.dao.updateProducto(id, { leido: true })
        return actualizado
    }

    deleteProductosLeidos = () => {
        const deleted = this.dao.deleteProductosWhere('leido', true)
        return deleted
    }
}

export default ContenedorMemoria
