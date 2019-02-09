$(document).ready(function() {
    var searchBy = "jap";
    document.getElementById("advanced-text").style.visibility = "hidden";
    document.getElementById("search-select").style.visibility = "hidden";
    document.getElementById("advanced-submit-btn").style.display = "none";
    $('#submit-btn').click(function() {
        var text = $('#input-text').val();
        var row = "";
        $.ajax({
            url: "fish.json",
            dataType: "json"
        }).done(function(response) {
            console.log(response);
            response.forEach(element => {
                if(searchBy=="jap"){
                  if(element.jap.toLowerCase().includes(text)){
                  row += "<tr>"+
                   "<td>"+element.jap+"</td>"+
                   "<td>"+element.eng+ "</td>"+
                   "<td>"+element.fishtype+ "</td>"+
                   "<td>"+element.species+"</td>"+"</tr>";
                  $('#table').html(row);}}
                else if(searchBy=="eng")
                {
                    if(element.eng.toLowerCase().includes(text)){
                    row += "<tr>"+
                     "<td>"+element.jap+"</td>"+
                     "<td>"+element.eng+ "</td>"+
                     "<td>"+element.fishtype+ "</td>"+
                     "<td>"+element.species+"</td>"+"</tr>";
                    $('#table').html(row);}}
                else if(searchBy=="fishtype")
                {
                    if(element.fishtype.toLowerCase().includes(text)){
                    row += "<tr>"+
                     "<td>"+element.jap+"</td>"+
                     "<td>"+element.eng+ "</td>"+
                     "<td>"+element.fishtype+ "</td>"+
                     "<td>"+element.species+"</td>"+"</tr>";
                    $('#table').html(row);}}
                else if(searchBy=="species")
                {
                    if(element.species.toLowerCase().includes(text)){
                    row += "<tr>"+
                     "<td>"+element.jap+"</td>"+
                     "<td>"+element.eng+ "</td>"+
                     "<td>"+element.fishtype+ "</td>"+
                     "<td>"+element.species+"</td>"+"</tr>";
                    $('#table').html(row);}}
                else if(searchBy=="all"){
                    if(element.jap.toLowerCase().includes(text)||element.eng.toLowerCase().includes(text)
                    ||element.fishtype.toLowerCase().includes(text)||element.species.toLowerCase().includes(text)){
                        row += "<tr>"+
                         "<td>"+element.jap+"</td>"+
                         "<td>"+element.eng+ "</td>"+
                         "<td>"+element.fishtype+ "</td>"+
                         "<td>"+element.species+"</td>"+"</tr>";
                        $('#table').html(row);}}
            
                

            });
        });
    });

    $('#advanced-btn').click(function() {
        document.getElementById("advanced-text").style.visibility = "visible";
        document.getElementById("search-select").style.visibility = "visible";
        document.getElementById("advanced-submit-btn").style.display = "block";
    });

    $('#advanced-submit-btn').click(function() {
        var temp = document.getElementById("search-select");
        searchBy = temp.options[temp.selectedIndex].value;
        if(searchBy=="jap"){
            document.getElementById("search-by").innerHTML="Search by Japanese Name";
        }
        else if(searchBy=="eng"){
            document.getElementById("search-by").innerHTML= "Search by English Name";
        }
        else if(searchBy=="fishtype"){
            document.getElementById("search-by").innerHTML ="Search by Fish Type";
        }
        else if(searchBy=="species"){
            document.getElementById("search-by").innerHTML = "Search by Species";
        }
        else if(searchBy=="all"){
            document.getElementById("search-by").innerHTML ="Search by Every Column";
        }



    });
    //display
    $.ajax({
        url: "fish.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var row = "";
        response.forEach(element => {
              console.log(element.jap,element.eng,element.fishtype,element.species);
              row += "<tr>"+
               "<td>"+element.jap+"</td>"+
               "<td>"+element.eng+ "</td>"+
               "<td>"+element.fishtype+ "</td>"+
               "<td>"+element.species+"</td>"+"</tr>";
              $('#table').html(row);
        });
    });
});
