/**
 * PersonaController
 *
 * @description :: Server-side logic for managing Personas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	RegistroPersona : function(req, res, next) {
		Persona.find(function PersonaFounder(err, persona) {
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
						persona:persona
			});
		});
 } ,

 guardar : function(req, res){
	 var personaObj = {
		 nombre : req.param("nombre"),
		 apPaterno : req.param("apPaterno"),
		 apMaterno : req.param("apMaterno"),
		 fechaNacimiento : req.param("fechaNacimiento"),
		 curp : req.param("curp"),
		 email : req.param("email"),
		 telefono : req.param("telefono"),
		 colonia : req.param("colonia"),
		 calle : req.param("calle"),
		 numero : req.param("numero"),
		 rol : "1",
		 login : req.param("login"),
		 password : req.param('password'),
		 passwordConfirmation : req.param('passwordConfirmation'),
		 encryptedPassword : req.param('encryptedPassword')
	 }

	 console.log("password"+personaObj.password);
	 Persona.create(personaObj, function(err, persn) {
	 	if(err){
			console.log(JSON.stringify(err));
				return res.redirect('persona/RegistroPersona');
		}
				return res.redirect('persona/RegistroPersona');
	});
},
editar : function(req, res, next) {
	Persona.findOne(req.param("id"), function userFounder(err, user) {
		if(err)
			return next(err);
		res.view({
			persona:persona
		});
	});
	}
};
