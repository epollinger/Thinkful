$(document).ready(function(){
	// Delete Current List
	$(".delList").click(function(ev){
    	$(".listItem").not(".base").detach();
	})

	// add item to list
	$(".addItem").submit(function(ev) {
		ev.preventDefault();
		$("#warningText").text('');
		var txtval = $('#itemName').val();
		if (txtval.length >= 30){
			$("#warningText").text("Warning: Please keep Item Name to less than 30 characters");
			return;
		}
		//if (txtval.length == 0){
		//	$("#warningText").text("Warning: System cannot add blank item");
		//	return;
		//}		
		if (document.getElementById('itemName').validity.valueMissing){
			$("#warningText").text("Warning: System cannot add blank item");
			return;
		}

		var dup = 0;
		$.each($(".listItem").find(".listText"), function(){
			if ($(this).text().toLowerCase() == txtval.toLowerCase()) {
				dup += 1;
			}
		})

		if (dup != 0){
			$("#warningText").text("Warning: Item already exists");
			return;
		}		

		var newItem = $(".base").clone();
		$(newItem).attr('class', 'listItem');
		$(newItem).find(".listText").text(txtval);
		newItem.appendTo($("#list"));

		// Clear text field
		$('#itemName').val("");

		var items = $('#list li').get();
		items.sort(function(a,b){
  			var keyA = $(a).text().toLowerCase();
  			var keyB = $(b).text().toLowerCase();

  			if (keyA < keyB) return -1;
  			if (keyA > keyB) return 1;
  			return 0;
		});
		var ul = $('#list');
		$.each(items, function(i, li){
  			ul.append(li);
		});

		// replace list with ul
		$('#list').detach();
		$('.listWindow').append(ul);
 	})

	$("#deleteCheckedButton").click(function() {
		$.each($(".listItem").find(".liCheckBox"), function() {
			if ($(this).prop("checked")){
				$(this).parent().detach();
			}
		})
	})

	// enable item deletion
 	$("#list").on("click", ".delete", function(ev) {
 		$(this).parent().detach();
 	})

	// crossout when checked
 	$("#list").on("click", ":checkbox", function(ev) {
 		if ($(this).prop("checked")) {
 			$(this).parent().find(".listText").css("text-decoration", "line-through"); 
 		}
 		else {
 			$(this).parent().find(".listText").css("text-decoration", "none");
 		}
 	})

});