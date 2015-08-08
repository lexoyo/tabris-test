var page = module.exports = tabris.create('Page', {
    title: 'Mink',
    topLevel: true
});

tabris.create('ImageView', {
    image: 'images/bg.jpg',
    scaleMode: 'fill',
    layoutData: {left: 0, right: 0, top: 0, bottom: 0}
}).appendTo(page);

var buttonLogin = tabris.create('Button', {
    text: 'Me connecter',
    layoutData: {left: 0, right: '50%', bottom: 0}
}).appendTo(page);

var buttonRegister = tabris.create('Button', {
    text: 'Créer un compte',
    layoutData: {left: '50%', right: 0, bottom: 0}
}).appendTo(page);

buttonLogin.on('select', function() {
    require('./loginPage').open();
});

buttonRegister.on('select', function() {
    require('./registerPage').open();
});

