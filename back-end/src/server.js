const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config() // Carregar as variaveis de ambiente 

const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors

const myEmail = 'matheuszebende6@gmail.com'

// Rota para receber os dados do formulário
app.post('/form', (req, res) => {
    const { name, email, phone } = req.body;

    // Configurar o transporte SMTP
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: myEmail, // Seu email
            pass: process.env.EMAIL_PASSWORD // Sua senha
        }
    });

    // Opções de email
    let mailOptions = {
        from: email, // Seu email
        to: myEmail, // Seu email
        subject: 'Novo formulário enviado',
        text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}`
    };

    // Enviar email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar email:', error);
            res.status(500).send('Erro ao enviar email');
        } else {
            console.log('Email enviado: ', info.response);
            res.status(200).send('Email enviado com sucesso');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
