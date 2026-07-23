package control;


import jakarta.servlet.RequestDispatcher;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.*;
import java.io.*;

/**
 * Servlet implementation class Login
 */
@WebServlet("/docs/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	
	    String username = request.getParameter("username");
	    String password = request.getParameter("password");
	    
	    if ("admin".equals(username) && "Password123".equals(password)) {
	    
	    HttpSession session = request.getSession(true);
	       
	    session.setAttribute("username", username);
	    session.setAttribute("password", password);
	    
	  
	    RequestDispatcher rd = request.getRequestDispatcher("../WEB-INF/view/admin.jsp");
	    rd.forward(request, response);
	   
	    
	    } else {
	    	//user session
	    	response.sendRedirect("../docs/sign-in.html?login=true");
	    }
	}
	    
	    
	 

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
