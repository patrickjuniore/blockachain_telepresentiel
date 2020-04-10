const input = require('fs')
let courses = input.readFileSync('liste.txt',"utf8" )
//loop on the file "liste.txt"
for (i = 0; i < courses.length; i++) {
    input.appendFile('copy.txt', 1, function (err) {
        if (err) throw err;
        console.log('Ajouté!');
       })

  } 
/*
input.appendFile('copy.txt', 1, function (err) {
 if (err) throw err;
 console.log('Ajouté!');
})*/
