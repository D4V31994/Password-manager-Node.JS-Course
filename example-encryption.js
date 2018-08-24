var crypto = require('crypto-js');

var secretMessage = {
	name: 'David',
	secretName: '007'
};
var secretKey = '123abc';

// Below = Encrypt MESSAGE + turn array into JSON object

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

//Below = Decrypt Message + convert JSON object to JS 

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted message: ' + decryptedMessage);
console.log(decryptedMessage.secretName);