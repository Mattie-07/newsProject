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
let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword, 
    passwordParts[2], 
    parseInt(passwordParts[1]), //parseInt is needed because initally this is a String and we need it to be an int
    256, 
    'sha256')
    //im assuming that the reason it is converted to hex is to make the number more easier to deal with.
    let hashNewLogin = keyNewLogin.toString('hex');
    console.log(hashNewLogin);

    if(hashNewLogin === passwordParts[3]){
        console.log('passwords match')
    }
    else{
        console.log('The passwords dont match!');
    }