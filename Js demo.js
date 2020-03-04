var num=1;
$(document).ready(function(){
$("#add-row").click(function(){

var name = $("#name").val();
var age = $("#age").val();
var markup = "<tr><td>" + num + "</td><td>" + name + "</td><td>" + age + "</td></tr>";
// $("#tablebody").append(name,age);
tableBody = $("table tbody");
tableBody.append(markup);
num++;
// $("#td2").append(age);

});
});
