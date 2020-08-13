
let fetch = document.getElementById('fetch');
fetch.addEventListener('click', function (e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onprogress = function () {
        console.log("My name is anurag");
    }

    xhr.onreadystatechange = function () {
        console.log(this.readyState);
    }

    xhr.onload = function () {
        let ul = document.getElementById('ul');
        let html = "";
        let data = JSON.parse(this.response);
        Array.from(data).forEach((element, index) => {
            html += `<li>${element.title}</li>`
        })
        ul.innerHTML = html;
    }
    xhr.send();
});

let post = document.getElementById("post");
post.addEventListener('click',function(){

    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function () { 
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Some Error occured");
        }
    }
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(JSON.stringify(params));

});