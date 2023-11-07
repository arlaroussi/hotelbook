var tabAge=[];

function initFormulaire() {
    document.getElementById('adulte').value = 0;
    document.getElementById('enfant').value = 0;
    document.getElementById('chambre').value = 0;
    document.getElementById('lieu').value = '';
    document.getElementById('arr').value = '';
    document.getElementById('dep').value = '';

    for (let i=0; i<nbEnf; i++) {
        document.getElementsByName('age')[i].value = 0;
    }
}

function OriginalText() {
    var adulte = 0;
    var enfant = 0;
    var chambre = 0;
    document.getElementById("adulte").value=adulte;
    document.getElementById("enfant").value=enfant;
    document.getElementById("chambre").value=chambre;
}

function augmenterVal(para) {

    var valeur = parseInt(document.getElementById(para).value) + 1;
        
    document.getElementById(para).value = valeur;
    
    var ctab = document.getElementById('table');
 
    if (para === "enfant") {
        
       if (valeur > 0) {
                var tr = document.createElement('tr');
                var td = document.createElement ('td');
                var lab = document.createElement('label');
                lab.innerHTML = "Age enfant : "
                var input = document.createElement('input');
                input.type = "number";
                input.id = "age";
                input.name= "age";
                td.setAttribute('style', 'text-align: center');
                td.setAttribute('colspan', '4');
                td.appendChild(lab);
                td.appendChild(input);
                tr.appendChild(td);
                ctab.appendChild(tr);      
 }  
}
}

function diminuerVal(para) {
    
    if (parseInt(document.getElementById(para).value) <= 0)
        document.getElementById(para).value = 0;
    else {
            document.getElementById(para).value -= 1;      
            if (para == 'enfant') {
                document.getElementById("table").deleteRow(-1);
            }
    }
}

function verifierDate(para1, para2) {

    if (para1.value < para2.value) {
        alert("Attention, vos paramètres sont érronés");
    }
}

function searchBooking() {

    var titre = document.createElement('h2');
    var texte = document.createTextNode('Synthèse');

    titre.appendChild(texte);
    titre.setAttribute('style','text-align:center');

    var para = document.createElement("p");

    var elt = document.querySelector('footer');

    var tab = document.getElementsByClassName('footer'); 

    var nbAdulte = document.getElementById("adulte").value;
    var nbEnf = document.getElementById("enfant").value;  
    var nbChambre = document.getElementById("chambre").value;
    var saut1 = document.createElement('br');

   document.getElementById('nbadu').innerHTML = nbAdulte;
   document.getElementById('nbenf').innerHTML = nbEnf;
   document.getElementById('nbchamb').innerHTML = nbChambre;
   let ctx1 = document.createTextNode("Nombre adultes : " + nbAdulte);
   let ctx2 = document.createTextNode("Nombre enfants : " + nbEnf);
   let ctx4 = document.createTextNode("Nombre chambres : " + nbChambre);

   for (let i=0; i<nbEnf; i++) {

    var age = parseInt(document.getElementsByName('age')[i].value);

    if (age > 0 && age <19)
        tabAge.push(age);
    else 
        alert("Age erronné");
   } 

   para.appendChild(titre);
   para.appendChild(ctx1);
   para.appendChild(saut1);
   para.appendChild(ctx2);
   para.appendChild(saut1.cloneNode());
   para.appendChild(ctx4);
   para.appendChild(saut1.cloneNode());
  
   let i = 1;

   tabAge.forEach(element => {
       let ctx3 = document.createTextNode("Age enfant " + i + " : " + element);  
       i++; 
       para.appendChild(ctx3);
       para.appendChild(saut1.cloneNode());
   });
    
    para.classList.add('footer');

    document.body.appendChild(para);
}

