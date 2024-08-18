const express = require('express')
const app = express()
const {Clientes} = require('./database/banco')

app.use(express.json())

app.get('/cadastro/:nome/:sobrenome/:idade', async (req, res) => {
    
    const {nome, sobrenome, idade} = req.params;

    try{
    const newClient = await Clientes.create({
        nome: `${nome} ${sobrenome}`,
        idade,
        endereco: "Endereco padrao",
        bairro: "Bairro padrao",
        cep: "0000-000",
        telefone: 9999-9999,
        celular: 9999-9999
    });
    res.status(201).json({message: "Cliente registrado com sucesso!", client: newClient});
    } catch (error){
        res.status(500).json({message: "Erro ao registra cliente!"});
    }
    
});

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor está exceutando na porta ${PORT}`);
})

