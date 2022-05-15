$(document).ready(function() 
{  
		$("#alertSuccess").hide();  
	    $("#alertError").hide(); 
}); 
 
 
// SAVE ============================================ 
$(document).on("click", "#btnSave", function(event) 
{  
	// Clear alerts---------------------  
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text("");  
	$("#alertError").hide(); 
 
	// Form validation-------------------  
	var status = validateComplaintForm();  
	if (status != true)  
	{   
		$("#alertError").text(status);   
		$("#alertError").show();   
		return;  
	} 
 
	// If valid------------------------  
	var type = ($("#hidComplaintIDSave").val() == "") ? "POST" : "PUT"; 

	$.ajax( 
	{  
			url : "ComplaintAPI",   
			type : type,  
			data : $("#formComplaint").serialize(),  
			dataType : "text",  
			complete : function(response, status)  
			{   
				onComplaintSaveComplete(response.responseText, status);  
			} 
	}); 
}); 


function onComplaintSaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divComplaintGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while saving.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while saving..");   
		$("#alertError").show();  
	} 

	$("#hidComplaintIDSave").val("");  
	$("#formComplaint")[0].reset(); 
} 

 
// UPDATE========================================== 
$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidComplaintIDSave").val($(this).closest("tr").find('#hidComplaintIDUpdate').val());     
	$("#PerName").val($(this).closest("tr").find('td:eq(0)').text());     
	$("#PerNIC").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#cArea").val($(this).closest("tr").find('td:eq(2)').text());
	$("#cAccNo").val($(this).closest("tr").find('td:eq(3)').text());   
	$("#cAddress").val($(this).closest("tr").find('td:eq(4)').text()); 
	$("#cEmal").val($(this).closest("tr").find('td:eq(5)').text()); 
	$("#Comp").val($(this).closest("tr").find('td:eq(6)').text()); 
}); 




//REMOVE===========================================
$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "ComplaintAPI",   
		type : "DELETE",   
		data : "cID=" + $(this).data("cID"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onComplaintDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 

function onComplaintDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 
		
			$("#divComplaintGrid").html(resultSet.data); 
			
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		}
		

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while deleting.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while deleting..");   
		$("#alertError").show();  
	}
}
 
// CLIENT-MODEL========================================================================= 
function validateComplaintForm() 
{  
	// NAME-----------------------
	if ($("#PerName").val().trim() == "")  
	{   
		return "Insert Name.";  
	} 
	
	// NIC---------------------------  
	if ($("#PerNIC").val().trim() == "")  
	{   
		return "Insert NIC.";  
	} 
	
	
	
	// AREA------------------------------
	if ($("#cArea").val().trim() == "")  
	{   
		return "Insert Area.";  
	}
	
	// Account Number-------------------------------
	if ($("#cAccNo").val().trim() == "")  
	{   
		return "Insert Account Number.";  
	}
	
	// ADDRESS---------------------------  
	if ($("#cAddress").val().trim() == "")  
	{   
		return "Insert Address.";  
	}
	
	// EMAIL---------------------------  
	if ($("#cEmal").val().trim() == "")  
	{   
		return "Insert Email.";  
	}
	
	// COMPLAINT---------------------------  
	if ($("#Comp").val().trim() == "")  
	{   
		return "Insert Complaint.";  
	}
		
	return true; 
}