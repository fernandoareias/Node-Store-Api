
'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const repository = require('../repositories/order-repository');

exports.get = async(req, res, next) => {
  try{
    var data = await repository.get();
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
}

exports.getBySlug = async(req, res, next) => {
  try{
    var data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
}

exports.getById = async(req, res, next) => {
  try{
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
}

exports.getByTag = async(req, res, next) => {
  try{
    var data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
}

exports.post = async(req, res, next) =>  {
  try{
    var data = await repository.create(req.body);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
};

exports.put = async(req, res, next) =>  {
  try{
    var data = await repository.atualizar(req);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({
      message: 'Falha ao processar requisição'
    });
  }
  };

  exports.delete = async(req, res, next) =>  {
    try{
      var data = await repository.deletar(req);
      res.status(200).send(data);
    } catch(e) {
      res.status(500).send({
        message: 'Falha ao processar requisição'
      });
    }
  };