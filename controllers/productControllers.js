/*
  Program:  E-commerce API MVP requirements
  Programmer: Ryan Phillip C. Co & Marcus Padua
  Section:  BSCSAN22
  Start Date: July 16 2023
  End Date:   July 16 2023
*/

const Product = require('../models/product');

//use to create product to put inside the database
module.exports.createProduct = (productData) => {
  let newProduct = new Product({
    name: productData.name,
    description: productData.description,
    price: productData.price,
    isActive: true,
  });

  return newProduct.save().then((product, error) => {
    if (error) {
      return false;
    } else {
      return true;
    }
  });
};

//use to show all the products inside the database whether it be active or not
module.exports.getAllProducts = () => {
  return Product.find().then((products) => {
    return products;
  });
};

//use to show all active products insdie the database
module.exports.getActiveProducts = () => {
  return Product.find({ isActive: true }).then((products) => {
    return products;
  });
};

//use to show a specific product inside the database
module.exports.getProductById = (productId) => {
  return Product.findById(productId).then((product) => {
    return product;
  });
};

//use to update product information inside the database
module.exports.updateProduct = (productId, updatedData) => {
  return Product.findByIdAndUpdate(productId, updatedData, { new: true }).then((updatedProduct) => {
    return updatedProduct;
  });
};

//use to make to make product isActive into false
module.exports.archiveProduct = (productId) => {
  return Product.findByIdAndUpdate(productId, { isActive: false }, { new: true }).then((archivedProduct) => {
    return archivedProduct;
  });
};

//use to activate the product that is false
module.exports.activateProduct = (productId) => {
  return Product.findByIdAndUpdate(productId, { isActive: true }, { new: true }).then((activateProduct) => {
    return activateProduct;
  });
};


