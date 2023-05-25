function calcularGasolina(){

  var etanol=document.getElementById('etanol').value;
  var gasolina=document.getElementById('gasolina').value;
  var result=document.getElementById('result');

    if(etanol !='' && gasolina !=''){

        result.style.visibility='visible';

    
        var vantagem = etanol/gasolina;

        if(vantagem>=0.7){
           result.innerHTML= '<p>Abasteça com: <br> <strong>Gasolina</strong></p>'

        }else{
            result.innerHTML= '<p>Abasteça com: <br> <strong>Etanol</strong></p>'
        }


    }else{
        alert("Preencha os campos novamente")
    }








}