var searchButton = $('#searchButton');

searchButton.click(async function(event)  {
    
    var filters = [];
    const checkedArray = $('.iconCheckbox:checkbox:checked');
    console.log(checkedArray);
    checkedArray.each( function(index) {
        filters.push(this.id) 
    });
    console.log(filters);


    await fetch('/search', {
        method: 'POST',
        body: JSON.stringify({
            filters: filters
        }),
        headers: { 'Content-Type': 'application/json' },

    });

   
})