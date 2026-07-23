package control;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.*;
/**
 * Servlet implementation class Shipping
 */
@WebServlet("/docs/Shipping")
public class Shipping extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Shipping() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	   String street = request.getParameter("street");
	   String city = request.getParameter("city");
	   String doors = request.getParameter("doors");
	   String pin = request.getParameter("pin");
	   String country = request.getParameter("country");
	   String productName = request.getParameter("productName");
	   
	   request.setAttribute("street", street);
	   request.setAttribute("city", city);
	   request.setAttribute("doors", doors);
	   request.setAttribute("pin", pin);
	   request.setAttribute("country", country);
	   request.setAttribute("productName", productName);
	 
	   
	   RequestDispatcher rd = request.getRequestDispatcher("../WEB-INF/view/shipping.jsp");
	   rd.forward(request, response);
	   
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
