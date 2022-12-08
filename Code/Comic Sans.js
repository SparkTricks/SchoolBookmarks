var interval = setInterval(() => {
  document.querySelectorAll('*').forEach(
    function(element){
      element.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
      element.style.fontKerning="normal";
    }
  )
},10)
