var items = [[
    {title: 'Alex H. a accepté la mise en relation'},
    {title: 'Novaxis a embauché Léo, bravo!'},
    {title: 'Proctor a accepté la mise en relation.'}
],[
    {title: 'Roger, je cherche pour trouver !'},
    {title: 'Alex, informatique et bureautique en calçon'},
    {title: 'Marcel, masson et fort en orthographe'},
    {title: 'Georges, de la jungle'},
    {title: 'Léo, commercial et fier de l\'être'},
    {title: 'Roger, je cherche pour trouver !'},
    {title: 'Alex, informatique et bureautique en calçon'},
    {title: 'Marcel, masson et fort en orthographe'},
    {title: 'Georges, de la jungle'},
    {title: 'Léo, commercial et fier de l\'être'},
    {title: 'Roger, je cherche pour trouver !'},
    {title: 'Alex, informatique et bureautique en calçon'},
    {title: 'Marcel, masson et fort en orthographe'},
    {title: 'Georges, de la jungle'},
    {title: 'Léo, commercial et fier de l\'être'},
    {title: 'Roger, je cherche pour trouver !'},
    {title: 'Alex, informatique et bureautique en calçon'},
    {title: 'Marcel, masson et fort en orthographe'},
    {title: 'Georges, de la jungle'},
    {title: 'Léo, commercial et fier de l\'être'},
    {title: 'Roger, je cherche pour trouver !'},
    {title: 'Alex, informatique et bureautique en calçon'},
    {title: 'Marcel, masson et fort en orthographe'},
    {title: 'Georges, de la jungle'},
    {title: 'Léo, commercial et fier de l\'être'}
], [
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'},
    {title: 'Novaxis, recherche des homme de force'},
    {title: 'Proctor, postes ouverts pour garder des enfants'},
    {title: 'Minic, les professionnels du déménagement dans la région parisienne'}
]];


var page = module.exports = tabris.create('Page', {
  title: 'Mink'
});

var tabFolder = tabris.create("TabFolder", {
    layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(page);

var List = require('./list');
var tabs = [];

tabs[0] = tabris.create("Tab", {
    title: 'Courriers',
}).appendTo(tabFolder);
List.decorate(tabs[0], items[0], function(item) {
    action.dispose();
    require('./profile-page').open();
});

tabs[1] = tabris.create("Tab", {
    title: 'Profiles',
}).appendTo(tabFolder);
List.decorate(tabs[1], items[1], function(item) {
    action.dispose();
    require('./profile-page').open();
});

tabs[2] = tabris.create("Tab", {
    title: 'Offres',
}).appendTo(tabFolder);
List.decorate(tabs[2], items[2], function(item) {
    action.dispose();
    require('./profile-page').open();
});

var action = tabris.create("SearchAction", {
    title: "Search",
    image: "images/search.png"
});




