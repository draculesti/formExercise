
const nameElement = document.getElementById('nameInput');
const emailElement = document.getElementById('emailInput');
const ageElement  = document.getElementById('ageInput');
const alertElement = document.getElementById('alertText');
const btnElement = document.getElementById('btnSubmit');



const nameValidation = (name) => name.length <= 3? false: true  ;
const ageValidation = (age)=> age > 0 ? true: false ; 
const emailValidation = (email) =>{
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!regex.test(email)) return false;
  return true;
} 

btnElement.addEventListener('click', (event) =>{
  event.preventDefault();
// console.log({name: nameElement.value, email: emailElement.value, age: ageElement.value});
    const nameVal  = nameValidation(nameElement.value.trim());
    const emailVal = emailValidation(emailElement.value.trim());
    const ageVal   = ageValidation(Number(ageElement.value));

  if(nameVal && emailVal && ageVal){
    alertElement.className = "alert alert-success alert-dismissible fade show mt-3 container";
    alertElement.innerHTML = `
      Your account has been successfully created.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close">
      </button>
    `;
    alertElement.addEventListener('closed.bs.alert', () => {
      location.reload();
    });
    return;
  }

  const errors = [];

  if (!nameVal) errors.push('name');
  if (!emailVal) errors.push('email');
  if (!ageVal) errors.push('age');

  alertElement.className ='alert alert-danger alert-dismissible fade show mt-3 container';
  alertElement.innerHTML = `
    You need to check: ${errors.join(', ')}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close">
    </button>
  `;
  alertElement.addEventListener('closed.bs.alert', () => {
    location.reload();
  });
  return;
});