
'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

const emailService = require('../services/email-service');

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


exports.post = async(req, res, next) =>  {
  try{
    var data = await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALTY_KEY)
    });

    emailService.send(req.body.email, 'Bem vindo ao Node Store', global.EMAIL_TMPL.replace('{0}', req.body.name));

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