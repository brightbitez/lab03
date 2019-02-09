$(document).ready(function() {
    $('#submit-btn').click(function() {
        var text = $('#input-text').val();
        var row = "";
        $.ajax({
            url: "fish.json",
            dataType: "json"
        }).done(function(response) {
            console.log(response);
            response.forEach(element => {
                  if(element.jap.toLowerCase().includes(text)||element.eng.toLowerCase().includes(text)||
                  element.fishtype.toLowerCase().includes(text)||element.species.toLowerCase().includes(text)){
                  row += "<tr>"+
                   "<td>"+element.jap+"</td>"+
                   "<td>"+element.eng+ "</td>"+
                   "<td>"+element.fishtype+ "</td>"+
                   "<td>"+element.species+"</td>"+"</tr>";
                  $('#table').html(row);}
            });
        });
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
