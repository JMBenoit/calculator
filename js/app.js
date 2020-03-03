function $(value)
{
  return document.getElementById(value);
}

function c(value)
{
  return document.getElementsByClassName(value)
}

var display = 0.0;

function numInput()
{
 console.log('num');
}

function funcInput()
{
  console.log('func');
}

function clearInput()
{
  console.log('clear');
}

function equalInput()
{
  console.log('equal');
}

var numItems = c('num');
for (var i = 0; i < numItems.length; i++) {
  numItems[i].addEventListener('click', numInput);
}

var funcItems = c('function');
for (var i = 0; i < funcItems.length; i++) {
  funcItems[i].addEventListener('click', funcInput);
}

var clearItems = c('clear');
for (var i = 0; i < clearItems.length; i++) {
  clearItems[i].addEventListener('click', clearInput);
}

var equalItems = c('equal');
for (var i = 0; i < equalItems.length; i++) {
  equalItems[i].addEventListener('click', equalInput);
}
