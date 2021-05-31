function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth()+1;
    let currYear = d.getFullYear();
    return currYear + "-" + ((currMonth<10) ? '0'+currMonth : currMonth )+ "-" + ((currDate<10) ? '0'+currDate : currDate );
}
document.getElementById('date').value = today();

function todaytime(){
    let t=new Date();
    let hour=t.getHours();
    let minute=t.getMinutes();
    return((hour<10) ? '0'+hour : hour) + ":" + ((minute<10) ? '0'+minute : minute );
}
document.getElementById('time').value = todaytime();

function filtercheckbox(){
  
  var magiee_cost=15;
  var choclate_cost=25;
  var toffee_cost=5;
  var blanket_cost=100;
  var checkBox_choclate = document.getElementById("choclate");
  var checkBox_toffee = document.getElementById("toffee");
  var checkBox_maggiee = document.getElementById("Maggie");
  var checkBox_blanket = document.getElementById("Blanket");
  var box_maggiee = document.getElementById("displaydetail_maggiee");
  var box_choclate = document.getElementById("displaydetail_choclate");
  var box_toffee = document.getElementById("displaydetail_toffee");
  var box_blanket = document.getElementById("displaydetail_blanket");

  if (checkBox_maggiee.checked == true ){
    document.getElementById("perunit_maggiee").innerHTML=" Unit cost of Maggie is" + magiee_cost + " /- per Unit.";
    box_maggiee.style.display = "block";
  }
  if (checkBox_choclate.checked == true ){
    
    document.getElementById("perunit_choclate").innerHTML=" Unit cost of choclate is " +choclate_cost+ " /-  per Unit.";
    box_choclate.style.display = "block";
  }
  if (checkBox_toffee.checked == true ){
    document.getElementById("perunit_toffee").innerHTML=" Unit cost of Toffee is "+toffee_cost+ " /- per Unit.";
    box_toffee.style.display = "block";
  }
  if (checkBox_blanket.checked == true ){
    document.getElementById("perunit_blanket").innerHTML=" Unit cost of blanket is "+blanket_cost+ " /- per Unit.";
    box_blanket.style.display = "block";
  }
  if (checkBox_toffee.checked == false ){
    box_toffee.style.display = "none";


  }
  if (checkBox_choclate.checked == false ){
    box_choclate.style.display = "none";

  }
  if (checkBox_maggiee.checked == false ){
    box_maggiee.style.display = "none";

  }
  if (checkBox_blanket.checked == false ){
    box_blanket.style.display = "none";

  }
}

/*function checkmaggie() {
    var checkBox = document.getElementById("Maggie");
    var box = document.getElementById("displaydetail");
    if (checkBox.checked == true){
      document.getElementById("perunit").innerHTML=" Unit cost of Maggie is 15/- per Unit.";
      box.style.display = "block";
    } else {
       box.style.display = "none";
    }
    
  }
  function checkchoclate() {
    var checkBox = document.getElementById("choclate");
    var box = document.getElementById("displaydetail");
    if (checkBox.checked == true){
      document.getElementById("perunit").innerHTML=" Unit cost of Choclate is 25/- per Unit.";
      box.style.display = "block";
    } else {
       box.style.display = "none";
    }
    
  }
  function checktoffee() {
    var checkBox = document.getElementById("toffee");
    var box = document.getElementById("displaydetail");
    if (checkBox.checked == true){
      document.getElementById("perunit").innerHTML=" Unit cost of Toffee is 5/- per Unit.";
      box.style.display = "block";
    } else {
       box.style.display = "none";
    }
    
  }*/
  function decrease_maggiee(){
    
    var quantity=document.getElementById("Quantity_maggiee").value;
    if(quantity>=0){
     
      quantity=quantity-1;
      document.getElementById("Quantity_maggiee").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_maggiee").value="0";
    }
  }
  function increase_maggiee(){
    var quantity=document.getElementById("Quantity_maggiee").value;
    if(quantity>=0){
     
      quantity=parseInt(quantity)+1;
      document.getElementById("Quantity_maggiee").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_maggiee").value="0";
    }
  }

  function decrease_choclate(){
    
    var quantity=document.getElementById("Quantity_choclate").value;
    if(quantity>=0){
     
      quantity=quantity-1;
      document.getElementById("Quantity_choclate").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_choclate").value="0";
    }
  }
  function increase_choclate(){
    var quantity=document.getElementById("Quantity_choclate").value;
    if(quantity>=0){
     
      quantity=parseInt(quantity)+1;
      document.getElementById("Quantity_choclate").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_choclate").value="0";
    }
  }

  function decrease_toffee(){
    
    var quantity=document.getElementById("Quantity_toffee").value;
    if(quantity>=0){
     
      quantity=quantity-1;
      document.getElementById("Quantity_toffee").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_toffee").value="0";
    }
  }
  function increase_toffee(){
    var quantity=document.getElementById("Quantity_toffee").value;
    if(quantity>=0){
     
      quantity=parseInt(quantity)+1;
      document.getElementById("Quantity_toffee").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_toffee").value="0";
    }
  }

  function decrease_blanket(){
    
    var quantity=document.getElementById("Quantity_blanket").value;
    if(quantity>=0){
     
      quantity=quantity-1;
      document.getElementById("Quantity_blanket").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_blanket").value="0";
    }
  }
  function increase_blanket(){
    var quantity=document.getElementById("Quantity_blanket").value;
    if(quantity>=0){
     
      quantity=parseInt(quantity)+1;
      document.getElementById("Quantity_blanket").value=quantity;
    
    }
    else{
      document.getElementById("Quantity_blanket").value="0";
    }
  }


  function totalcost(){
  
    var quantity_cal_maggiee=document.getElementById("Quantity_maggiee").value;
    var quantity_cal_choclate=document.getElementById("Quantity_choclate").value;
    var quantity_cal_toffee=document.getElementById("Quantity_toffee").value;
    var quantity_cal_blanket=document.getElementById("Quantity_blanket").value;
    var maggie_per_unit=15;
    var choclate_per_unit=25;
    var toffee_per_unit=5;
    var blanket_per_unit=100;
    var sumdisplay=0;
    var totalQuant=0;
  
    if(document.getElementById("Maggie").checked==true){
     var Totalsum_maggiee=parseInt(maggie_per_unit)*parseInt(quantity_cal_maggiee);
     totalQuant=parseInt(totalQuant)+parseInt(quantity_cal_maggiee);
     sumdisplay=parseInt(sumdisplay)+parseInt(Totalsum_maggiee);    
    }
      
    if(document.getElementById("choclate").checked==true){ 
    var Totalsum_choclate=parseInt(choclate_per_unit)*parseInt(quantity_cal_choclate);
     totalQuant=parseInt(totalQuant)+parseInt(quantity_cal_choclate);
     sumdisplay=parseInt(sumdisplay)+parseInt(Totalsum_choclate);
    }

    if(document.getElementById("toffee").checked==true){
      totalQuant=parseInt(totalQuant)+parseInt(quantity_cal_toffee);
    var Totalsum_toffee=parseInt(toffee_per_unit)*parseInt(quantity_cal_toffee);
    sumdisplay=parseInt(sumdisplay)+parseInt(Totalsum_toffee);
    
    }

    if(document.getElementById("Blanket").checked==true){
      totalQuant=parseInt(totalQuant)+parseInt(quantity_cal_blanket);
    var Totalsum_blanket=parseInt(blanket_per_unit)*parseInt(quantity_cal_blanket);
    sumdisplay=parseInt(sumdisplay)+parseInt(Totalsum_blanket);
    
    }

   
    
    
    document.getElementById("Total_Cost").innerHTML="Total Quantity  "+totalQuant +" Cost Rs.:"+sumdisplay;
   
    
    

  }