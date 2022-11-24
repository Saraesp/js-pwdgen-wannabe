
let first_name = prompt('Inserisci il tuo Nome')
let last_name = prompt('Inserisci il tuo Cognome')
let fav_color = prompt('Inserisci il tuo Colore preferito')

let number = document.getElementById('content').innerHTML;
console.log(number);

//CONCATENAZIONE ID
let string =`${first_name} ${last_name} ${fav_color} ${number}`

//ASSEGNAZIONE VALORE AD innerHTML
document.getElementById('content').innerHTML = string;