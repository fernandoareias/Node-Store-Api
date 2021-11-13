'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
    const res = await Order.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res =  await Order.findOne({
            slug: req.params.slug, 
            active: true
        }, 
        'title description price slug tags '
    );
    return res;
}

exports.getById = async(id) => {
    const res = await Order.find({
            _id: req.params.id, 
            active: true
        }, 
        'title description price slug tags '
    );
    return res;
}

exports.getByTag = async(tag) => {
    const res = await  Order.find({
            tags: req.params.tag, 
            active: true
        }, 
        'title description price slug tags '
    );

    return res;
}

exports.create = async(data) => {
    const Order = new Order(data);
    await Order.save();
}

exports.atualizar = async(data) => {
    await Order.findByIdAndUpdate(data.params.id, {
        $set: {
          title: data.body.title,
          description: data.body.description,
          price: data.body.price
        }
      });
}

exports.deletar = async(data) => {
    await Order.findOneAndRemove(data.params.id);
}