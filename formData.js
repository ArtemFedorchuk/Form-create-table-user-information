const nameInputElem = document.getElementById('name');
const lastNameInputElem = document.getElementById('lastName');
const emailInputElem = document.getElementById('email');

const submitFormElem = document.getElementById('btn');

const table = document.getElementById('table');

const delBtnElem = document.getElementById('btnDelete');

function randomDateGenerator() {
  return new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
}

function randomDate(){
  return `${randomDateGenerator().getDay()}.${randomDateGenerator().getMonth()}.${randomDateGenerator().getFullYear()}`
}

function handleSubmit() {
	const numValue = nameInputElem.value;
	const lastNameValue = lastNameInputElem.value;
	const emailValue = emailInputElem.value;

	const tr = document.createElement('tr');
	const td = document.createElement('td');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';

	let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let validEmail = regexp.test(emailValue);

	if(!validEmail){
		alert('Введiть корректний email')
	}else{
		let userInformation = [
			{
				userName: numValue,			
				userLastName: lastNameValue,
				userEmail: emailValue,
				dateRegistration :randomDate(),
				checkbox: ''
			}
		];

		userInformation.forEach(elem => {
			['userName','userLastName','userEmail','dateRegistration', 'checkbox'].map(field=> {
        const td = document.createElement('td');
        td.innerText = elem[field];
        return td;
    	}).forEach(tdElem=>{
        tr.appendChild(tdElem).appendChild(checkbox);
    	});

    		table.appendChild(tr);
		})
	}
}

function deleteRows() {
			const table = document.getElementById('table');
	    const inputs = [...table.querySelectorAll('input')];
	    	 inputs.forEach((input) => {
  				if (input.checked) {
	            let tr = input.parentElement.parentElement
	            table.deleteRow(tr.rowIndex);
	        }
				})
	}

submitFormElem.addEventListener('click', handleSubmit);
delBtnElem.addEventListener('click', deleteRows);
