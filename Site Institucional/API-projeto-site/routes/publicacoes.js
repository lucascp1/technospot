var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idUsuario', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUsuario = req.params.idUsuario;

    Publicacao.create({
        nomeArtista: req.body.nomeArtista,
        nomeMusica: req.body.nomeMusica,
        fkUsuarioMusica: idUsuario
    }).then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT 
    tbUsuarios.nome, 
    tbUsuarios.sobrenome, 
    tbIndicacoes.nomeArtista, 
    tbIndicacoes.nomeMusica 
    FROM tbUsuarios
    JOIN tbIndicacoes 
    ON tbIndicacoes.fkUsuarioMusica = tbUsuarios.idUsuario
    ORDER BY tbIndicacoes.idIndicacao DESC`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idUsuario = req.params.idUsuario;

    let instrucaoSql = `SELECT 
    tbUsuarios.nome, 
    tbUsuarios.sobrenome, 
    tbIndicacoes.nomeArtista, 
    tbIndicacoes.nomeMusica 
    FROM tbUsuarios
    JOIN tbIndicacoes 
    ON tbIndicacoes.fkUsuarioMusica = tbUsuarios.idUsuario
    WHERE fkUsuarioMusica = ${idUsuario}
    ORDER BY tbIndicacoes.idIndicacao DESC`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
