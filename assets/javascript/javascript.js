//Built by Alberto, Taylor and Grant from UTCodingBootcamp Houston
//Wait for the document to load
$(document).ready(function () {

    //Creating an event listener

    //URL to API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += "?" + $.param({
        'api-key' : "4e34acd533404c12a5fbdd7827988fce"
        });
    
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        // After the data comes back from the API
        .then(function (response) {
        var results = response.data;
            console.log(queryURL);
    }

















});