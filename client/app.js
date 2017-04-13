var app = document.getElementById('app');
var child = document.createElement('div').innerHTML='Welcome to docker deployment! This text was dynamically added using javascript'
app.append(child)