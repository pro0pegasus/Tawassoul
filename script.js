const form = document.getElementById('participants-form');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const nomError = document.getElementById('nom-error');
const emailError = document.getElementById('email-error');
const selectedFormation = document.getElementById('formation');
const totalParticipants = document.getElementById('total-participants');

let participants = [];
let id = 1;

function validerEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regexEmail.test(email))
        return true;
    
    return false;
}

function validerNom(nom){
    const regexNom = /^[a-zA-ZÀ-ÿ\s'-]{3,}$/

    if(regexNom.test(nom))
        return true;

    return false;
}

nomInput.addEventListener('input', ()=>{
    const nom = nomInput.value.trim();

    if(!validerNom(nom))
        nomError.textContent = 'Nom est invalide, min charachtre est 3...';
    else
        nomError.textContent = '';
});

emailInput.addEventListener('change', ()=>{
    const email = emailInput.value.trim();

    if(!validerEmail(email))
        emailError.textContent = 'Email est invalide, ressayer une autre...';
    else
        emailError.textContent = '';
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nom = nomInput.value.trim();
    const email = emailInput.value.trim();
    const formation = selectedFormation.value;

    if(validerNom(nom) && validerEmail(email)){

        const newParticipant = {
            id: id,
            nom: nom,
            formation: formation,
            email: email,
            selected: false
        }
        participants.push(newParticipant);
        liste.appendChild(ajouterElement(newParticipant));
        totalParticipants.textContent = `${participants.length}`;
        id++;
    
    } else {
        return;
    }
    
})

const liste = document.getElementById('liste');

function ajouterElement(participant){

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    li.textContent = `Nom: ${participant.nom} | Formation: ${participant.formation} | Email: ${participant.email}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.type = 'button';

    li.append(checkbox, deleteBtn);
    return li;
}

