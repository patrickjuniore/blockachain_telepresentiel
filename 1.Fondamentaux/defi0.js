const https = require('https');
const url = "https://blockchain.info/rawblock/000000000002de92d93fcb92eeb2be097af8570a70fa5a8c6df473626891c9d6"


const req = https.get(url, (res) => {
  // variable vide
  let resultat = '';

  res.on('data', (data) => {
    resultat += data;
  });

  //afficher le resulat
  //const obj = JSON.parse(resultat).hash

  res.on('end', () => {
    console.log(JSON.parse(resultat).time);
  });

  res.on('end', () => {
    console.log(JSON.parse(resultat).height);
  });
  
  //Encore à voir: recuperer les hash des transaction de façon récursive
  res.on('end', () => {
    console.log(JSON.parse(resultat).tx);
  });


  /*res.on('data', d => {
    process.stdout.write(d)
  })*/

});

//req.write(data)

req.on('error', (e) => {
    console.error(e);
  });

//afficher le resulat

//console.log(req);
//console.log(JSON.parse(req.resultat).hash);


req.end();
