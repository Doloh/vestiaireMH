var armuresRecup = [];
var nbValeurParPage = 1001;


function getArmors() {

  console.log('Récuperation des armures');
  for (let i = 1; i < nbValeurParPage; i++) {   
    fetch("https://mhw-db.com/armor/" + i).then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      armuresRecup.push(myJson);
      console.log(myJson);
    });
  }
}

//WAIT AVANT D'AFFICHER
function afficherArmures() {
  getArmors();

  setTimeout (function() {
    armuresRecup.sort(function(a, b) { 
      return a.id - b.id;
    });
    console.log('tableau trié');
    console.log(armuresRecup);
    
    var content = document.getElementById('content');
    
      for(let i = 0; i < armuresRecup.length; i++) {
        var newLiName = document.createElement('li');
        newLiName.classList = "armureName";
        newLiName.innerHTML = armuresRecup[i].name;
        content.appendChild(newLiName);
        
        var newLimg = document.createElement('img');
        newLimg.classList = "armureimg";
        newLimg.src = armuresRecup[i].assets.imageMale;
        content.appendChild(newLimg);
      }
  }, 3000);

  
}


  

  

