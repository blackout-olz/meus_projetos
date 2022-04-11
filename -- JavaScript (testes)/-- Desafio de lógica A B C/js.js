var a = 10
var b = 20
var c = null

document.write('A é igual a: ' + a + '<br>')
document.write('B é igual a: ' + b + '<br>')
document.write('C é igual a: ' + c + '<br>')
document.write('<hr>')

c = b
b = a 
a = c

document.write('A é igual a: ' + a + '<br>')
document.write('B é igual a: ' + b + '<br>')
document.write('C é igual a: ' + c + '<br>')
