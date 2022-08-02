<meta http-equiv="Content-Type" content="javascript"; charset=UTF-8"/>


//data -- return = data.substr(0,10);
const data = document.getElementById('id_sc_field_datachamado_1').value = document.getElementById('id_sc_field_datachamado_1').innerHTML;

// viatura
const vtr = document.getElementById('id_sc_field_veiculo_1').value = document.getElementById('id_sc_field_veiculo_1').innerHTML;

// n evento
const evNumb = document.getElementById('id_sc_field_id_1').value = document.getElementById('id_sc_field_id_1').innerHTML;

// endereço ou hospitais
const endHosp = document.getElementById('id_sc_field_enderecooco_1').value = document.getElementById('id_sc_field_enderecooco_1').innerHTML;

//nome
const name = document.getElementById('id_sc_field_paciente_1').value = document.getElementById('id_sc_field_paciente_1').innerHTML;







function description(){ 
var data = document.getElementById('id_sc_field_datachamado_1').value = document.getElementById('id_sc_field_datachamado_1').innerHTML;

var vtr = document.getElementById('id_sc_field_veiculo_1').value = document.getElementById('id_sc_field_veiculo_1').innerHTML;

var evNumb = document.getElementById('id_sc_field_id_1').value = document.getElementById('id_sc_field_id_1').innerHTML;

var endHosp = document.getElementById('id_sc_field_enderecooco_1').value = document.getElementById('id_sc_field_enderecooco_1').innerHTML;

var name = document.getElementById('id_sc_field_paciente_1').value = document.getElementById('id_sc_field_paciente_1').innerHTML;


return data.substr(0,10)+ " Paciente: " + String(name) + " Atendido por: " + String(vtr) + " no Evento de nº " + String(evNumb) + ", no Endereço: " + String(endHosp)}

description();