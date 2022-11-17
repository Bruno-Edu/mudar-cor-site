document.querySelectorAll("input[type='radio']")
.forEach(function(input){ /*ForEach = Para cada um deles*/
  input.oneclick=function(){
    document.documentElement.classList.add(input.id)
  }
})