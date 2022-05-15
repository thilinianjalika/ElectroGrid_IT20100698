package com;

import com.Complaint;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/ComplaintAPI")
public class ComplaintAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Complaint ComplaintObj = new Complaint(); 
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ComplaintAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String output = ComplaintObj.insertComplaint(request.getParameter("PerName"),
				request.getParameter("PerNIC"),
				request.getParameter("cArea"),
				request.getParameter("cAccNo"),
				request.getParameter("cAddress"),
				request.getParameter("cEmal"),
				request.getParameter("Comp"));
				
				
				response.getWriter().write(output);
	}
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		Map paras = getParasMap(request);
		String output = ComplaintObj.updateComplaint(paras.get("hidComplaintIDSave").toString(),
										   paras.get("PerName").toString(),
										   paras.get("PerNIC").toString(),
										   paras.get("cArea").toString(),
										   paras.get("cAccNo").toString(),
										   paras.get("cAddress").toString(),
										   paras.get("cEmal").toString(),
										   paras.get("Comp").toString());
			
		response.getWriter().write(output);
	}
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		 Map paras = getParasMap(request); 		 
		 String output = ComplaintObj.deleteComplaint(paras.get("cID").toString());  		 
		 response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
		private static Map getParasMap(HttpServletRequest request)
		{
		 Map<String, String> map = new HashMap<String, String>();
		try
		 { 
		 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		 String queryString = scanner.hasNext() ?
		 scanner.useDelimiter("\\A").next() : "";
		 scanner.close();
		 String[] params = queryString.split("&");
		 for (String param : params)
		 { 
		
		String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}
	}

	
	

		


