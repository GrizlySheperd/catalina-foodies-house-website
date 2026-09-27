# Catalina Foodie's House

Website for Catalina Foodie's House, a Sarawak comfort-food kitchen in Kuching.

Plain static site: HTML, CSS with Bootstrap 5, jQuery and basic JavaScript. There is no build step or server.

## Running it

Open `index.html` in a browser. That's it.

Bootstrap, jQuery and the Google Fonts load from CDNs, so you need an internet connection for the site to look and work right.

## Structure

```
index.html        Home page
menu.html         Menu with the order bar
contact.html      Contact details and message form
404.html          Not-found page (for use when hosted)
css/style.css     Site styles and colour palette (loaded after Bootstrap)
js/menu-data.js   Dish list and price formatting, shared by home and menu
js/home.js        Renders the featured dishes on the home page
js/menu.js        Renders the menu and manages the order
js/contact.js     Contact form validation
images/           Photos
```

To change a dish, its price or its photo, edit `js/menu-data.js`.

The contact form has no backend: it validates the fields and shows a thank-you message, but nothing is sent anywhere.
