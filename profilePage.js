var BasicProfile = require('./basic-profile');
var page = module.exports = tabris.create('Page', {
  title: 'Détail'
});
BasicProfile.decorate(page);
tabris.create('Button', {
  id: 'edit',
  text: 'Modifier'
}).on('select', function() {
}).appendTo(page);
BasicProfile.decorate(page);
tabris.create('Button', {
    id: 'contact',
  text: 'Contacter'
}).on('select', function() {
}).appendTo(page);

var style = BasicProfile.getStyle();
style['#edit'] = {layoutData: {left: 10, right: "50%", bottom: 0}};
style['#contact'] = {layoutData: {left: "50%", right: 10, bottom: 0}};

page.apply(style);


