
/**
 * This code gonna send an email
 *  
 */



const  mailer = require("nodemailer");

const transp = mailer.createTransport({

	service: 'gmail',
	auth:{
		user: 'luccasduarte320@gmail.com',
		pass: 'senha'
	}

});

const options = {

	from: 'luccasduarte320@gmail.com',
	to: 'jean_luccas320@hotmail.com',
	subject: 'Titulo do email',
	text: 'Corpo da mensagem'

};


transp.sendMail( options, (err, data)=>{

	if(err) throw new Error()
	console.log('Email enviado: '+info.response);

} );
