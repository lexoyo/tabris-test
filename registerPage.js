
var page = module.exports = tabris.create('Page', {
  title: 'Register'
});

tabris.create('TextView', {
  id: 'lastNameLabel',
  text: 'Nom:'
}).appendTo(page);

tabris.create('TextInput', {
  id: 'lastNameInput',
  message: 'Nom'
}).appendTo(page);

tabris.create('TextView', {
  id: 'firstNameLabel',
  alignment: 'left',
  text: 'Prénom:'
}).appendTo(page);

tabris.create('TextInput', {
  id: 'firstNameInput',
  message: 'Prénom'
}).appendTo(page);

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
  text: 'Mot de passe:'
}).appendTo(page);

tabris.create('TextInput', {
  id: 'passphraseInput',
  type: 'password',
  message: 'Mot de passe'
}).appendTo(page);

tabris.create('TextView', {
  id: 'countryLabel',
  text: 'Vous êtes:'
}).appendTo(page);

tabris.create('Picker', {
  id: 'countryPicker',
  items: ['Chercheur d\'emploi', 'Conseiller', 'Entreprise']
}).appendTo(page);

tabris.create('Button', {
  id: 'done',
  text: 'Créer mon compte'
}).on('select', function() {
  require('./profilePage').open();
}).appendTo(page);

page.apply({
  '#firstNameLabel': {layoutData: {left: 10, top: 18, width: 120}},
  '#firstNameInput': {layoutData: {left: ['#firstNameLabel', 10], right: 10, baseline: '#firstNameLabel'}},
  '#lastNameLabel': {layoutData: {left: 10, top: ['#firstNameLabel', 18], width: 120}},
  '#lastNameInput': {layoutData: {left: ['#lastNameLabel', 10], right: 10, baseline: '#lastNameLabel'}},
  '#emailLabel': {layoutData: {left: 10, top: ['#lastNameLabel', 18], width: 120}},
  '#emailInput': {layoutData: {left: ['#emailLabel', 10], right: 10, baseline: '#emailLabel'}},
   '#passphraseLabel': {layoutData: {left: 10, top: ['#emailLabel', 18], width: 120}},
  '#passphraseInput': {layoutData: {left: ['#passphraseLabel', 10], right: 10, baseline: '#passphraseLabel'}},
  '#countryLabel': {layoutData: {left: 10, top: ['#passphraseLabel', 18], width: 120}},
  '#countryPicker': {layoutData: {left: ['#countryLabel', 10], right: 10, baseline: '#countryLabel'}},
  '#done': {layoutData: {left: 10, right: 10, bottom: 0}}
});
