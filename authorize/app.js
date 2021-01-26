const pbkdf2 = require('pbkdf2');
const crypto = require("crypto");


let password ='StrongPassword15';
let salt = crypto.randomBytes(20).toString('hex');

// console.log(salt);

//combination of salt and password
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256' )

// console.log(key);

let hash = key.toString('hex');
console.log(hash);

let stored_pass = `pbkdf2_sha256$3600$${salt}$${hash}`
console.log(stored_pass);
let passwordParts = stored_pass.split('$');
console.log(passwordParts);

let newPassword = 'StrongPassword15';