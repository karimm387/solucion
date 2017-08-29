window.onload = function() {
  	$('.fecha').datetimepicker({
  		language : 'es',
  		weekStart : 1,
  		todayBtn : 1,
  		autoclose : 1,
  		todayHighlight : 1,
  		startView : 2,
  		minView : 2,
  		forceParse : 0
  	});



};
function Persona(){
  this.nombre;
  this.apPaterno;
  this.apMaterno;
  this.fechaNacimiento;
  this.curp;
  this.email;
  this.telefono;
  this.colonia;
  this.calle;
  this.numero;
  this.rol;
  this.login;
  this.password;
}

function editarRegistro(persn) {
Persona pe = new Persona()
  pe = persn;
    alert(pe.nombre);
}
