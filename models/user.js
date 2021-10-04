 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

Nombre : String,
Apellido : String,
Email : String,
Contrasena : String

})

//crear modelo

const User = mongoose.model('Users', UserSchema);
module.exports = User;