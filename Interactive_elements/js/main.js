const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});


// валидация формы

let validation = new JustValidate('#form')

let selector = document.querySelector('#tel')
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },{
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели почту'
  },
  {
    rule: 'email',
    errorMessage: 'Введите корректный e-mail'
  },
])
.addField('#tel', [
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length > 0)
    },
    errorMessage: 'Вы не ввели телефон'
  },
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
])



// тултип

tippy('[data-tippy-content]');