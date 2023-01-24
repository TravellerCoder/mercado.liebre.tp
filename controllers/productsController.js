const path = require('path');
const fs = require('fs');


const productsFilePath = path.resolve('./data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    renderProducts : (req, res) => {
        const regularProducts = products.filter(product => product.category =='regular');
        const inSalePrducts = products.filter(product => product.category == 'in-sale');
        const viewData = {
            regularProducts,
            inSalePrducts
        }
        return res.render(path.resolve(__dirname, '..', 'views','products'), viewData) 
    },
   
}
module.exports = {controller};