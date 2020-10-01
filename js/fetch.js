document.getElementById("botao").addEventListener("click", function(){

    let baseUrl = "https://script.google.com/macros/s/AKfycbz5ND56YHUDCh5KQQ6b9szvglTzDnHrg4ejU10dbjZWz9Y3GJkW/exec"
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value

    let url = `${baseUrl}?NOME=${nome}&EMAIL=${email}`

    var myHeaders = new Headers();
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';
})