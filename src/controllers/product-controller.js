
'use strict'

//const mongoose = require('mongoose');
//const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
  Product.find({active: true}, 'title price slug ').then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
}

exports.getBySlug = (req, res, next) => {
  Product.findOne({slug: req.params.slug, active: true}, 'title description price slug tags ')
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}

exports.getById = (req, res, next) => {
  Product.find({_id: req.params.id, active: true}, 'title description price slug tags ')
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}


exports.post = (req, res, next) =>  {
  var product = new Product(req.body);
  product.save().then(e => {
    res.status(201).send({ message: 'Produto cadastrado com sucesso'});
  }).catch(e =>  {
    res.status(400).send({ message: 'Não foi possível cadastrar o produto', data: e });
  });
  res.status(201).send(req.body);
};

exports.put = (req, res, next) =>  {
    res.status(201).send(req.body);
  };

  exports.delete = (req, res, next) =>  {
    res.status(201).send(req.body);
  };