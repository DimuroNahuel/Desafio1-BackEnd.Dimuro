class ProductManager {

    constructor () {
        this.products = [];
    }

    getProducts(){
        return this.products
    }

    addProduct( title, description, price, thumbnail, code, stock ){
        let codeIsRepeated = this.products.find(product => product.code === code)

        if(codeIsRepeated) {
            return console.error('Código ya existente')
        }
        
        let newProduct = {
            id: this.products.length + 1,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        }

        this.products.push(newProduct)
    }

    getProductById = (id) => {
        const resultado = this.products.find((element) => {
          return element.id === id;
        });
        if (!resultado) {
          return "No existe el producto que estas buscando";
        }
        return resultado;
    }
}
const productManager = new ProductManager()
productManager.addProduct('Producto_1','Descripcion_producto_1',111,'Image_product_1','p1',99)
productManager.addProduct('Producto_2','Descripcion_producto_2',222,'Image_product_2','p2',99)
productManager.addProduct('Producto_3','Descripcion_producto_3',333,'Image_product_3','p3',99)

for (let i=0;i<=productManager.products.length;i++){
    let producto=productManager.getProductById(i);
    console.log(`Bucle que muestra el product con id: ${producto.id}`, producto);
}
  

