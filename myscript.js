$(document).ready(function() {
    $('#submit-btn').click(function() {
        var text = $('#input-text').val();
        $.ajax({
            url: "fish.json",
            dataType: "json"
        }).done(function(response) {
            console.log(response);
            var row = "";
            response.forEach(element => {
                  console.log(element.japName,element.engName,element.fishType);
                  if(element.japName.includes(text)||element.engName.includes(text)||element.fishType.includes(text)){
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
              console.log(element.japName,element.engName,element.fishType);
              row += "<tr>"+
               "<td>"+element.jap+"</td>"+
               "<td>"+element.eng+ "</td>"+
               "<td>"+element.fishtype+ "</td>"+
               "<td>"+element.species+"</td>"+"</tr>";
              $('#table').html(row);
        });
    });
});