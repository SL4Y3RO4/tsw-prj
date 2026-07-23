<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="Stylesheet" href="../WEB-INF/style.css">
</head>
<body>
                  <h1>username: <% String s1 = (String)request.getAttribute("username");  out.println(s1); %> </h1>
                  <h1>password: <% String s2 = (String)request.getAttribute("password"); out.println(s2); %> </h1>
</body>
</html>