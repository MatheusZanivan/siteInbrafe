const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 3000

const user = "testematheus@inbrafe.com.br"
const pass = "@Teste123"

const email = document.querySelector('[data-form-email]')
const valor = email.value

const text = document.querySelector('[data-form-text]')
const mensagem = text.value

const assunto = document.querySelector('[data-form-subject]')
const subject = assunto.value

const botao = document.querySelector('[data-form-button]')
botao.addEventListener('click',()=>{
    console.log("Deu bom")
})

app.get('/', (req, res) => res.send('Hello Word'))

app.get('/send' ,(rep,res) =>{

    const trasnporter = nodemailer.createTransport({
        host: "email-ssl.com.br",
        port: 465,
        auth :{user, pass}

    })

    trasnporter.sendMail({
        from: user,
        to: user,
        replyTo: valor,
        subject: subject,
        text: mensagem,
    }).then(info=>{
        res.send(info)
    }).catch(error =>{
        res.send(error)
    })

})

app.listen(port, () => console.log(`Running on port ${port}!`))

