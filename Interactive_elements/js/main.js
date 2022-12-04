const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});


// валидация формы

// var selector = document.getElementById("input[type='tel']");
// var im = new Inputmask("+7 (999) 999-99-99");

// im.mask(selector);

// new JustValidate('.form', {
//   rules: {
//     name: {
//       required: true,
//       minLenght: 2,
//       maxLenght: 10,
//     },
//     tel: {
//       required: true,
//       function: (name, value) => {
//         const phone = selector.inputmask.unmaskedavalue ()
//         return Number(phone) && phone.length === 10
//       }
//     }
//   }
// })


// тултип

tippy('[data-tippy-content]');