console.log('test')
var searchButton = $('#searchButton');
var searchText = $('#nameSearch')

searchButton.click(async function(event)  {
 
    
    var filters = [];
    const checkedArray = $('.iconCheckbox:checkbox:checked');
    console.log(checkedArray);
    checkedArray.each( function(index) {
        filters.push(this.id) 
    });
    console.log(filters);
    var nameFilter = searchText.val()

var request = {
    filters, 
    nameFilter
}

 
   fetch(`/search/a/${JSON.stringify(request)}` , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    });

})
