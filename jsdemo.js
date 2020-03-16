var num=1;
$(document).ready(function(){

	$("#add-row").click(function(){
		$("#update").hide();

		var name = $("#name").val();
		var age = $("#age").val();
		
		var markup = '<tr id="'+num+'" data-sno="'+num+'" data-name="'+name+'" data-age="'+age+'" ><td>' + num + '</td><td>' + name + '</td><td>' + age + '</td><td>'+'<div class="btn-group btn-group-toggle" data-toggle="buttons">\
<button type="button" id="update-row"  class="btn btn-teal btn-rounded btn-sm m-0" data-toggle="modal"data-target="#myModal">Update</button>\
<button type="button" id="up-row" class="btn btn-teal btn-rounded btn-sm m-0" data-toggle="modal" >Up</button>\
<button type="button" id="down-row" class="btn btn-teal btn-rounded btn-sm m-0" >Down</button>\
<button type="button" id="delete-row" class="btn btn-teal btn-rounded btn-sm m-0" data-toggle="modal">Delete</button>\
<button type="button" id="view-row" class="btn btn-teal btn-rounded btn-sm m-0" data-toggle="modal"data-target="#ViewModal" >View</button>\
</div>'+'</td></tr>';
// $("#tablebody").append(name,age);
//var markup = "<tr><td>" + num + "</td><td>" + name + "</td><td>" + age + "</td></tr>";
		tableBody = $("table tbody");
		tableBody.append(markup);
		num++;
		$("input").val('');
// $("#td2").append(age);

	});

	$("#tableBody").on("click","#update-row",function(){
		$("#add-row").hide();
		$("#update").show();
		var name= $(this).parents('tr').attr("data-name");
 		var age=$(this).parents('tr').attr("data-age");
 		$("#name").val(name);
 		$("#age").val(age);
 		event_update=$(this);
 		$("#update").click(function(){
 			if ($("#form-id").valid()){
 			name = $("#name").val();
			age = $("#age").val();
			event_update.parents("tr").find("td:eq(1)").text(name);
			event_update.parents("tr").find("td:eq(2)").text(age);
		$('input').val('');	}
 		});
	});


	$("#tableBody").on("click","#view-row",function(){
		var name= $(this).parents('tr').attr("data-name");
 		var age=$(this).parents('tr').attr("data-age");
 		var num=$(this).parents('tr').attr("data-sno");
 		document.getElementById("a").innerHTML=name;
 		document.getElementById("b").innerHTML=age;
 		//document.getElementById("view").innerHTML = "Name: " + x +"<br>"+ "Age: "+y;
});

});
