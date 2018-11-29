

const  sender = require('./sendEmail');


sender.createConnection('hotmail', 'jean_luccas320@hotmail.com', 'j34nduart3');

sender.setOptions('jean_luccas320@hotmail.com','luccasduarte320@gmail.com','Tentativa dois', 'body text');

sender.sendEmail();