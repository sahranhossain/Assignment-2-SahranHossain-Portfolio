README FILE

ExpressJS Portfolio Website - Assignment 2

-----------------------------------------------------------------------------------

### Overview
This is a personal portfolio website built with Node.js and Express.js with EJS templates. It shows page routing, reusable layouts, and responsive design with the use of Bootstrap and Font Awesome.

This website has 4 main pages:
- HOME: Introduction and brief overview of my profile
- ABOUT: Contains information about my skills, interests, and background.
- PROJECTS: Shows different projects I have done so far including networking and website projects
- CONTACT: Contact form for people to reach out to me with email

Every page shares the same header and footer with navigation links. The same style applies throughout the site.

-----------------------------------------------------------------------------------

### Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap 5.3.3
- Font Awesome 6.5.0

-----------------------------------------------------------------------------------

### Outside Code Citation
These are some outside code that I used for the website. They will be cited here.

1. Bootstrap 5.3.3
   Code:
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap 5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   Source: https://getbootstrap.com
   Function: Gives responsive design, layout, and good visual components to the website.

2. Font Awesome 6.5.0
   Code: <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
   Source: https://fontawesome.com/
   Function: Used this for social media icons such as the GitHub and LinkedIn icons in the footer.

3. Render Deployment Coniguration (0.0.0.0)
   Code: server.listen(port, '0.0.0.0');
	 server.keepAliveTimeout = 120000;
	 server.headersTimeout = 130000;
   source: https://render.com/docs/web-services#port-binding     	 		 	   
           https://nodejs.org/api/http.html#serverkeepalivetimeout
   Function: Prevents 502 gateway errors during deployment on Render

4. Copyright Text
   Code: <!-- Copyright text --> <p>© <%= new Date().getFullYear() %> Sahran Hossain. All rights reserved.</p>
   Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#the_%C2%A9_entity
           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
   Function: Shows a live updating copyright year with the © symbol.


-----------------------------------------------------------------------------------

### Deployment Notes
My website is deployed on Render (Free Tier).
Free tier websites on Render automatically spin down after 15 minutes of inactivity to save their resources.
So when you access the website after inactivity, the website might take up to 1 minute to start again.
When it's all back up every page and route function should work again.

-----------------------------------------------------------------------------------