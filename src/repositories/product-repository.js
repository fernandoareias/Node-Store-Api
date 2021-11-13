'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res =  await Product.findOne({
            slug: req.params.slug, 
            active: true
        }, 
        'title description price slug tags '
    );
    return res;
}

exports.getById = async(id) => {
    const res = await Product.find({
            _id: req.params.id, 
            active: true
        }, 
        'title description price slug tags '
    );
    return res;
}

exports.getByTag = async(tag) => {
    const res = await  Product.find({
            tags: req.params.tag, 
            active: true
        }, 
        'title description price slug tags '
    );

    return res;
}

exports.create = async(data) => {
    const product = new Product(data);
    await product.save();
}

exports.atualizar = async(data) => {
    await Product.findByIdAndUpdate(data.params.id, {
        $set: {
          title: data.body.title,
          description: data.body.description,
          price: data.body.price
        }
      });
}

exports.deletar = async(data) => {
    await Product.findOneAndRemove(data.params.id);
}