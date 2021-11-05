**Spring (Web) MVC** is a [[Spring]] framework for web-sites & REST services

- *Model* contains indepentend data
- *View* contains various UI elements and pages,
- *Controller* accepts requests and sends an appropriate response
	- `@Controller` and `@RestController`


**Servlets** 

#todo Learn more about servlets
- Server Applets?

Servlets should be registered inside **servlet containers** like Tomcat. Registration indicates for which paths servlet is responsible. For example one servlet could be responsible for `/documents/*` paths and another one for `/users/*` paths

```java

class MyServlet extends HttpServlet {
	@override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) {
		...
	}
	@override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) {
		...
	}
}

```


**Dispatcher servlet** is a parent controller for all Spring controllers
- Processes every HTTP request before redirecting it to the specific controller
- Smart enough to convert returned data to HTML / JSON

**Controllers** react to  HTTP requests