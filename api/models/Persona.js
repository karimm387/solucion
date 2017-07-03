/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        nombre : {
          type:'string',
          required: true
        },
        apPaterno : {
          type:'string',
          required: true
        },
        apMaterno : {
          type:'string',
          required: true
        },
        fechaNacimiento : {
          type:'string',
          required: true
        },
        curp : {
          type : 'string',
          required : true,
          unique: true
        },
        // email: {
        //    type: 'string',
        //    required: true
        //  },
         telefono : {
           type:'string',
           required: true
         },
         colonia : {
           type:'string',
           required: true
         },
         calle : {
           type:'string',
           required: true
         },
         numero : {
           type:'string',
           required: true
         },
         rol : {
           type:'string',
           required: true,
           defaultsTo : 'cmprdr'
         },
         login : {
           type : 'string',
           required : true
         },
         password : {
           type : 'string',
           required : true
         },
         passwordConfirmation : {
           type : 'string',
           required : true
         },
         encryptedPassword : {
           type : 'string'
         }


             // Este método es para evitar pasar toda la información del modelo
             // Evitamos pasar los siguientes parámetros: password, confirmation, encryptedpassword y _csrf.
           ,toJSON: function() {
             var obj = this.toObject();
             delete obj.password;
             delete obj.confirmation;
             delete  obj.encryptedPassword;
             delete obj._csrf;
             return obj;
           }
  }
  // ,beforeCreate:  function(values, next) {
  //   console.log('Ya entre al beforeCreate');
  //     var password = values.password;
  //     var passwordConfirmation = values.passwordConfirmation;
  //     console.log(password+";"+passwordConfirmation);
  //     if(!password || !passwordConfirmation || password!=values.passwordConfirmation){
  //       var passwordDoesNoMatchError = [{
  //         name : 'passwordDoesNoMatchError',
  //         message : 'Las contrasenias deben coincidir'
  //       }]
  //       return next({
  //         err:passwordDoesNoMatchError
  //       });
  //     }
  //     require('bcrypt').hash(values.password,10, function passwordEncrypted(err, encryptedPassword) {
  //       values.encryptedPassword = encryptedPassword;
  //       values.password = null;
  //       values.passwordConfirmation = null;
  //       next();
  //     });
  // }
};
