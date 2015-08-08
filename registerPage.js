var BasicProfile = require('./basic-profile');
var page = module.exports = tabris.create('Page', {
  title: 'Register'
});
BasicProfile.decorate(page);
tabris.create('Button', {
  id: 'done',
  text: 'Créer mon compte'
}).on('select', function() {
  require('./profilePage').open();
}).appendTo(page);

page.apply(BasicProfile.getStyle());
