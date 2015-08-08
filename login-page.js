var page = module.exports = tabris.create('Page', {
  title: 'Login'
});

tabris.create('TextView', {
  id: 'emailLabel',
  alignment: 'left',
  text: 'Email:'
}).appendTo(page);

tabris.create('TextInput', {
  id: 'emailInput',
  message: 'Email'
}).appendTo(page);

tabris.create('TextView', {
  id: 'passphraseLabel',
  text: 'Passphrase:'
}).appendTo(page);

tabris.create('TextInput', {
  id: 'passphraseInput',
  type: 'password',
  message: 'Passphrase'
}).appendTo(page);

tabris.create('Button', {
  id: 'done',
  text: 'Entrer'
}).on('select', function() {
  require('./welcome-page').open();
}).appendTo(page);

page.apply({
  '#emailLabel': {layoutData: {left: 10, top: 18, width: 120}},
  '#emailInput': {layoutData: {left: ['#emailLabel', 10], right: 10, baseline: '#emailLabel'}},
  '#passphraseLabel': {layoutData: {left: 10, top: ['#emailLabel', 18], width: 120}},
  '#passphraseInput': {layoutData: {left: ['#passphraseLabel', 10], right: 10, baseline: '#passphraseLabel'}},
  '#done': {layoutData: {left: 10, right: 10, bottom: 0}}
});
