var List = module.exports = {
    decorate: function(container, items, onClick) {
        tabris.create("CollectionView", {
            layoutData: {left: 0, top: 0, right: 0, bottom: 0},
            items: items,
            itemHeight: 50,
            initializeCell: function(cell) {
                var nameTextView = tabris.create("TextView", {
                    layoutData: {left: 30, right: 30, centerY: "50%"},
                    alignment: "center"
                }).appendTo(cell);
                cell.on("change:item", function(widget, item) {
                    nameTextView.set("text", item.title);
                });
            }
        }).on("select", function(target, value) {
            console.log("selected", value.title);
            onClick(value);
        }).appendTo(container);
    }
};

