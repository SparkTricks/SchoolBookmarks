var prmpt = prompt("Enter the code you want to add to the document.");
try{
  document.body.innerHTML +=  `${prmpt}`;
}catch(e){
  alert(e);
}
alert("done");
