'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		idIndicacao: {
			field: 'idIndicacao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        nomeArtista: {
            field: 'nomeArtista',
            type: DataTypes.STRING,
            allowNull: false
        },
		nomeMusica : {
            field: 'nomeMusica',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkUsuarioMusica: {
            field: 'fkUsuarioMusica',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'tbIndicacoes', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};
