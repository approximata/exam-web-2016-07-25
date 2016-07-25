'use strict';

var domManager = (function() {
  // var addButton = document.querySelector('.button-text');
  // var showAllButton = document.querySelector('.show-all');
  var domResultField =  document.querySelector("p");


  function fillContent(input) {
    domResultField.textContent = input.text;
  }

  // function addInnerHtmlToAddHtml(element){
  //   return '<div class="food-item">' + element.name + ' ' +
  //   element.calorie + ' ' + element.date.substring(0, 10) +
  //   '</div> <div class="buttons"> <button class="delete" type="button" id=' +
  //   'd' + element.id + '></button> </div>'
  // }
  //
  // function setInputBlank() {
  //   inputFieldName.value = '';
  //   inputFieldCalorie.value = '';
  //   inputFieldDate.value = '';
  // }
  //
  //
  // function addHtml(element) {
  //   var newFood = document.createElement('div');
  //   console.log(newFood);
  //   newFood.classList.add('foodholder');
  //   console.log(addInnerHtmlToAddHtml(element));
  //   newFood.innerHTML = addInnerHtmlToAddHtml(element);
  //   newFood.setAttribute('id', 'food' + element.id);
  //   newFood.setAttribute('name', element.name);
  //   newFood.setAttribute('calorie', element.calorie);
  //   foodlist.appendChild(newFood);
  //   setInputBlank();
  //   console.log('addhtml done');
  // }
  //
  // function deleteDom(elementId) {
  //   var id = '#food' + elementId;
  //   console.log(id);
  //   foodlist.removeChild(document.querySelector(id));
  // }
  //
  // function drawTasks(inputdata) {
  //   inputdata.forEach(function (element) {
  //     if ((element.name).length > 0) {
  //       console.log(element);
  //       addHtml(element);
  //     }
  //   });
  // }

  return {
    fillContent: fillContent,

  };
})();
