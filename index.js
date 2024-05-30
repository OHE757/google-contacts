 document.querySelector('#btn-add-contact')
 document.addEventListener('click', function(){
    const nameInput= document.querySelector('#name-input');
    addContact(nameInput.value);
 });

 function addContact(fullName){
if (!fullName || !fullName.trim ())
return;

const contactDiv = document.createElement('div');
contactDiv.className ='contact-entry';

const nameInitialDiv = document.createElement('div');
nameInitialDiv.className = 'name-initial';
nameInitialDiv.textContent= fullName.charAt(0);

const fullNameDiv = document.createElement ('div');
fullNameDiv.className= 'full-name';
fullNameDiv.textContent = fullName;


//append in order
contactDiv.append(nameInitialDiv);
contactDiv.append(fullNameDiv);
document.querySelector('#contacts-list').append (contactDiv);
 }