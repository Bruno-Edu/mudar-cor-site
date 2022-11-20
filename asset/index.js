/* Opção utilizada em navegadores que não possuem suporte ao has() do CSS */

document.querySelectorAll("input[type='radio']")/*Procurando no documento o elemento input radio*/
.forEach(function(input){ /*ForEach = Para cada um deles, coloque uma função*/
  input.onclick = function() {
    document.documentElement.classList.add(input.id) /* Buscando na tag html do documento e adicionando classList onde o input recebera um ID*/
  }
})