$(function() {
    function getSelect(selectedId) {
        return '<select>'+
            '<option value="1" '+ (selectedId === 1 ? 'selected=selected' : '') +'>Link 1</option>'+
            '<option value="2" '+ (selectedId === 2 ? 'selected=selected' : '') +'>Link 2</option>'+
            '<option value="3" '+ (selectedId === 3 ? 'selected=selected' : '') +'>Link 3</option>'+
            '<option value="4" '+ (selectedId === 4 ? 'selected=selected' : '') +'>Link 4</option>'+
            '<option value="5" '+ (selectedId === 5 ? 'selected=selected' : '') +'>Link 5</option>'+
        '</select>';
    }

    function prepareMenuItem(item) {
        for (var i in item) {
            if (!item.hasOwnProperty(i)) continue;
            if (i === 'data') {
                for (var j in item.data) {
                    if (!item.data.hasOwnProperty(j)) continue;
                    item[j] = item.data[j];
                }
                delete item.data;
            }
            if (i === 'children' && $.isArray(item.children) && item.children.length > 0) {
                for (var k in item.children) {
                    prepareMenuItem(item.children[k]);
                }
            }
        }

        return item;
    }

    $('#menu-configurator').fancytree({
        source: { url: '/data.json', cache: false },
        autoActivate: true,
        autoCollapse: false,
        autoScroll: true,
        minExpandLevel: 1,
        icons: false,

        dblclick: function(event, data) {
            console.log(data.node);
            if (data.targetType === 'title') {
                data.node.editStart();
                return false; // prevent expand/collapse
            }
        },

        extensions: ['table', 'edit'],

        table: {
            nodeColumnIdx: 0
        },

        renderColumns: function(event, data) {
            var node = data.node;
            var tds = $(node.tr).find('>td');
            // column with select
            $(tds[1]).html(getSelect(data.node.data.urlId));
            $(tds[1]).find('select').change(function() {
                data.node.data.urlId = parseInt($(this).val());
            });

            // column with visibility checkbox
            var visibleChecked = data.node.data.visible ? 'checked="checked"' : '';
            $(tds[2]).addClass('visible').html('<input type="checkbox"'+ visibleChecked +'>');
            $(tds[2]).find('input[type="checkbox"]').change(function() {
                data.node.data.visible = $(this).is(':checked');
            });
            
            // column with featured checkbox
            var featuredChecked = data.node.data.featured ? 'checked="checked"' : '';
            $(tds[3]).addClass('featured').html('<input type="checkbox"'+ featuredChecked +'>');
            $(tds[3]).find('input[type="checkbox"]').change(function() {
                data.node.data.featured = $(this).is(':checked');
            });
        }
    });

    $('#add-new-button').click(function() {
        var node = $("#menu-configurator").fancytree("getActiveNode");
        node.editCreateNode("after", "Название");
    });

    $('#save-button').click(function() {
        var tree = $("#menu-configurator").fancytree("getTree").toDict(true);
        var elements = tree.children;
        var processedItems = [];
        for (var i in elements) {
            var processedItem = prepareMenuItem(elements[i]);
            processedItems.push(processedItem);
        }
        console.log(processedItems)
    });
});