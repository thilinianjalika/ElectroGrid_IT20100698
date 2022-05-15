<%@ page import="com.Complaint"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>    

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>PowerComplaint</title>
<link rel="stylesheet" href="Views/bootstrap.min.css"> 
<script src="Components/jquery-3.4.1.min.js"></script> 
<script src="Components/Complaint.js"></script> 
</head>
<body>
<div class="container"> 
	<div class="row">  
		<div class="col-6"> 
			<h1>ElectroGrid Complaint Management</h1>
				<form id="formComplaint" name="formComplaint" method="post" action="Complaint.jsp">  
					   Name:  
 	 				<input id="PerName" name="UName" type="text"  class="form-control form-control-sm">
					<br>NIC:   
  					<input id="PerNIC" name="PerNIC" type="text" class="form-control form-control-sm">   
  					<br>Email:   
  					<input id="cEmal" name="cEmal" type="text"  class="form-control form-control-sm">
  					<br>Address:   
  					<input id="cAddress" name="cAddress" type="text"  class="form-control form-control-sm">
  					<br>Area:   
  					<input id="cArea" name="cArea" type="text"  class="form-control form-control-sm">
					<br>  
					<br>Account Number:   
  					<input id="cAccNo" name="cAccNo" type="text"  class="form-control form-control-sm">
					<br> 
					<br>Complaint:   
  					<input id="Comp" name="Comp" type="text"  class="form-control form-control-sm">
					<br> 
					<input id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary">  
					<input type="hidden" id="hidComplaintIDSave" name="hidComplaintIDSave" value=""> 
				</form>
				
				<div id="alertSuccess" class="alert alert-success"> </div>
				
			   <div id="alertError" class="alert alert-danger"></div>
				
			   <br>
				<div id="divComplaintGrid">
					<%
						Complaint ComplaintObj = new Complaint(); 
						out.print(ComplaintObj.readComplaint());
					%>
				</div>
				
				 
			</div>
		</div>
</div>
 
</body>
</html>