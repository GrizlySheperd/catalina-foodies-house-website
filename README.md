# Catalina Foodie's House

Website for Catalina Foodie's House, a Sarawak comfort-food kitchen in Kuching.

Plain static site: HTML, CSS with Bootstrap 5, jQuery and basic JavaScript. There is no build step or server.

## Running it

Open `index.html` in a browser. That's it.

Bootstrap and jQuery are saved inside the project (`css/vendor`, `js/vendor`), so the site also works offline. Only the Google Fonts need internet; without it, similar fallback fonts are used.

## Structure

```
index.html        Home page
menu.html         Menu with the order bar
contact.html      Contact details and message form
404.html          Not-found page (for use when hosted)
css/style.css     Site styles and colour palette (loaded after Bootstrap)
css/vendor/       Bootstrap 5.3.3
js/main.js        Page fade transitions and the phone menu (every page)
js/menu-data.js   Dish list and price formatting, shared by home and menu
js/home.js        Renders the featured dishes on the home page
js/menu.js        Renders the menu and manages the order
js/contact.js     Contact form validation
js/vendor/        jQuery 3.7.1
docs/             Presentation notes and screenshots
images/           Photos
```

To change a dish, its price or its photo, edit `js/menu-data.js`.

The contact form has no backend: it validates the fields and shows a thank-you message, but nothing is sent anywhere.
