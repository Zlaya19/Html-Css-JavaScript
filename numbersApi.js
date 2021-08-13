let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', getFactAjax);

function getFactAjax() {
    let number = input.value;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/'+number, true);

    xhr.onload = function() {
        if(this.status === 200 && number != ''){
            output.style.display = 'flex';
            output.innerText = this.responseText;
        }
    }
    xhr.send();
}

