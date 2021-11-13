'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
    const res = await Customer.find({
        active: true
    }, 'name email');
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.find({
            _id: req.params.id, 
            active: true
        }, 
        'name email password'
    );
    return res;
}


exports.create = async(data) => {
    const customer = new Customer(data);
    await customer.save();
}

exports.atualizar = async(data) => {
    await Customer.findByIdAndUpdate(data.params.id, {
        $set: {
          name: data.body.name,
          email: data.body.email,
          passwprd: data.body.password
        }
      });
}

exports.deletar = async(data) => {
    await Customer.findOneAndRemove(data.params.id);
}