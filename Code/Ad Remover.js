void(function(){
  setInterval(function(){
    document.querySelectorAll('iframe').forEach(
      function(element){
        element.parentNode.removeChild(element)
      }
    )
  },50)
}());
// copied this off of a github gist, idk where tho
