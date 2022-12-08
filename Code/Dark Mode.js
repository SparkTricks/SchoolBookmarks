setInterval(() => {
  document.querySelectorAll('*').forEach(
    function(element){
      element.style.backgroundColor="#181a1b";
      element.style.color="#FFFFFF";
      element.style.borderColor="#000";
    }
  )
},100)
