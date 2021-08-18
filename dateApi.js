let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let output = document.getElementById('output');

input.addEventListener('input', getFactFetch);

/* function getFactAjax() {
    let userDate = input.value;
    let userMonth = input2.value;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/' + userDate + '/' + userMonth + '/date', true);

    xhr.onload = function() {
        if(this.status === 200 && userDate != '' && userMonth != ''){
            output.style.display = 'flex';
            output.innerText = this.responseText; console.log(this.responseText)
        }
    }
    xhr.send();
} */

function getFactFetch() {
    
    let userDate = input.value;
    let userMonth = input2.value;

    fetch('http://numbersapi.com/' + userDate + '/' + userMonth + '/date')
        .then(response => response.text())
        .then(data => {
            if(userDate == '' || userMonth == ''){
                output.style.display = 'none';
            }
            if(userDate != '' && userMonth != ''){
                output.style.display = 'flex';
                output.innerText = data;
            }
        })
        .catch(err => console.log(err));
    }

    /* function getFactFetch() {

    return new Promise((resolve, reject) => {
        let userDate = input.value;
        let userMonth = input2.value;

    resolve(fetch('http://numbersapi.com/' + userDate + '/' + userMonth + '/date'))
        .then(response => response.text())
        .then(data => {
            if(userDate == '' || userMonth == ''){
                output.style.display = 'none';

                const error = false;

                if(!error){
                    resolve();
                }else{
                    reject('Error: Somthing went wrong!');
                };
            }
            if(userDate != '' && userMonth != ''){
                output.style.display = 'flex';
                output.innerText = data;
            }
        })
        .catch(reject => console.log(reject));
    }

)} */