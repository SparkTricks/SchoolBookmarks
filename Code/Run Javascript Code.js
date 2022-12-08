var prmpt = prompt("Enter the code.");
try{
  eval(prmpt);
  alert('done');
}catch(e){
  alert(e);
}
