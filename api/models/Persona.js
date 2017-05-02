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
        email: {
           type: 'string',
           required: true,
           unique: true
         },
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
           required: true
         }
  }
};
