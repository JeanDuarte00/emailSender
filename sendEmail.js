
/**
 * This code gonna send an email, :P
 * I recomend you to use hotmail account to do it
 *  
 */

const mailer = require('nodemailer');


let transp;
let option;

/**
 * Parameters - they all are strings
 */
exports.createConnection = (service, email, password)=>{

	this.transp = mailer.createTransport({

		service: service,
		auth:{
			user: email,
			pass: password
		}

	});
}

exports.setOptions = (origem, destinatary, subject, message)=>{

	this.option = {

		from: origem,
		to: destinatary,
		subject: subject,
		text: message
	
	};
	
}

exports.sendEmail = ()=>{

	this.transp.sendMail( option, (err, resp)=>{

		if(err) new Error().message;
		console.log('Email enviado: ' + resp);
	
	} );
	
}
