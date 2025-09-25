This is a personal portfolio website built with HTML5, CSS, and JavaScript.
The website showcases personal projects, an about-me section, and a contact form.

Header:
The header contains the logo (just the word Portfolio), also a navigation menu liking to sections like home, about me, etc. When it comes to css, the header has sticky property, so that it is always visible to teh user for easy navigation.

Main section: 
The main page contains some text and photo, the photo is animated, and it will not be shown in smaller than 767px devices. This page uses flexbox as a display.

About me: 
Now the about me page has a title with some hover effects and pseudo elements (before and after) to make it more beautiful when hovering over it. This page uses grid for the cards on it, these cards has opacity and scale effect when hovering.

Projects: 
For the projects section, we have cards that are displayed using flex and they are using 3-d effects when hovering, each card has front and back faces.

Contact: 
For this section, it is pretty simple, it has some text and form with labels and input / textarea with submit button.

For the functionality: 
I have a button at the header that toggles between dark and light modes (default is dark). Also as previously mentioned, the sticky effect in the header, when the page reaches height X, the header will start to stick to the top of the page. Finally, we have small arrow (in the home page) that has css animation and using js, when clicking on it, it takes us to the next page (about me).
Also I'm using webfonts library of which I'm getting the icons I used like the sun, moon and the bar menu, as needed file also (all.css) which contains the details of these icons. The normalize will make the website more consistent across deferent browsers.