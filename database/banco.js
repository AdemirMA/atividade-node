const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('dbauladsm', 'clientes', '',{
    host: 'localhost',
    dialect: 'mysql'
})


const Clientes = sequelize.define('clientes', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INT,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.INT,
        allowNull: false
    },
    celular:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

sequelize.sync({force: true}).then(async () => {
    await Clientes.bulkCreate([
     {
        nome: 'Maria Fernandez',
        idade: 23,
        endereco: 'Rua Flores',
        bairro: 'Itajaí',
        cep: '0000-000',
        telefone: 9999-999,
        celular: 99999-999
     },
     {
        nome: 'Carlos Garcia',
        idade: 30,
        endereco: 'Rua Pantanal',
        bairro: 'Gross',
        cep: '0000-000',
        telefone: 9999-999,
        celular: 99999-999
     },
     {
        nome: 'Joaquim Fenix',
        idade: 50,
        endereco: 'Rua Texas',
        bairro: 'Dallas',
        cep: '0000-000',
        telefone: 9999-999,
        celular: 99999-999
     }
    ]);
    console.log("Clientes inicias adicionados ao banco de dados");
})

module.exports = {
    Clientes
}