# Presentation Notes: Catalina Foodie's House

**Theme chosen:** No. 2, Foodies (Food Website)
**Built with:** HTML, CSS + Bootstrap 5, jQuery, basic JavaScript
**How to open:** double-click `index.html`. No internet or server needed.

---

## 1. The 3 pages (Task 1)

| Page | File | What the assignment asks for | Where it is |
|---|---|---|---|
| Home | `index.html` | Website title, short intro, at least 1 image, navigation menu | Big title "Real Sarawak flavours", intro paragraph, table photo, menu bar at the top |
| Main Content | `menu.html` | Food name, food image, price, Order button | 6 dish cards, each with a photo, name, price (RM) and an **Order** button |
| Contact / Form | `contact.html` | Name, Email, Message, Submit button | Form on the right side of the page, with a **Send message** button |

The navigation menu is on every page. On a phone it turns into a **☰ button**.

---

## 2. jQuery functions (Task 2: need at least 3, we have 6)

| jQuery function | What the user sees | Where to show it | Code |
|---|---|---|---|
| `click()` | Buttons react when tapped | Any button | `js/main.js` line 7, 20 |
| `fadeIn()` | Page fades in when it opens | Open any page | `js/main.js` line 4 |
| `fadeOut()` | Page fades out when you go to another page | Click Home / Menu / Contact | `js/main.js` line 14 |
| `slideDown()` / `slideUp()` | Phone menu slides open and closed | Tap ☰ (on a phone) | `js/main.js` lines 24, 27 |
| `slideDown()` / `slideUp()` | Order list slides open and closed | Menu page, tap the bar at the bottom | `js/menu.js` lines 160, 162 |
| `fadeIn()` + `fadeOut()` | "Added ✓" appears, then disappears | Menu page, tap **Order** | `js/menu.js` lines 206–208 |
| `hide()` / `show()` | Old messages are hidden or shown | Contact form, menu bar | `js/contact.js` line 63 |

**Simple way to explain it:** "jQuery lets me add animations like fade and slide with one short line of code, instead of writing the animation myself."

---

## 3. JavaScript functions (Task 3: need at least 2, we have 3)

| Function | What it does | Code |
|---|---|---|
| `calculateTotal()` | Goes through every dish in the order (using a **loop**) and adds up the **number of items** and the **total price** | `js/menu.js` line 8 |
| `showOrderConfirmation()` | When you tap **Place order**, it shows a "Thank you for your order!" box with the number of items and the total price | `js/menu.js` line 24 |
| `validateForm()` | Checks the contact form before sending (see next section) | `js/contact.js` line 16 |

**How to demo:** Menu page → tap **Order** on Kolo Mee twice and Sarawak Laksa once.
The bar shows **3 items · RM 24.00** (7.50 + 7.50 + 9.00 = 24.00).
Then tap **Place order** and the confirmation box appears.

---

## 4. Form validation (Task 4)

`validateForm()` checks 4 things. If something is wrong, a **red message** appears under that field.

| Check | Error message |
|---|---|
| Name is empty | "Please tell us your name." |
| Email is empty | "We need an email to reply to." |
| Email has the wrong format (e.g. `ali@`) | "That email doesn't look quite right." |
| Message is empty | "Don't forget your message!" |
| Consent box not ticked | "Please tick the box so we're allowed to reply to you." |

If everything is correct, the form clears and a thank-you message fades in.

**How to demo:** press **Send message** with everything empty, so all the red messages appear. Then fill everything in, tick the box and send again.

### Ethics (rubric item d: "ethical data handling")
- There is a **consent checkbox**: the user has to agree before their name and email can be used, and only to reply.
- The site **does not store or send** any personal data anywhere.
- The order confirmation says honestly: *"This is a demo website, so no real order was sent."*
- Every image has **alt text** (a description for blind users using screen readers).

---

## 5. Convert to APK (Task 5): YOU need to do this part

I can't make the APK for you. You do it with AppGeyser:

1. Put the website online for free. The easiest way is **Netlify Drop** (app.netlify.com/drop): drag the whole project folder onto the page and it gives you a link. GitHub Pages also works.
2. Open the link on your phone's browser first and check it works.
3. Go to **AppGeyser** → create an app with the **Website** template → paste your link.
4. Give it the name "Catalina Foodie's House", pick an icon, and download the APK.
5. Install the APK on an Android phone and test it (see the checklist below).

**Why this should work well:** Bootstrap and jQuery are saved **inside the project** (`css/vendor` and `js/vendor`). The app doesn't need to download them, so the design and buttons still work on a slow connection.

---

## 6. Testing checklist (Task 6)

Tick these on **both** the browser and the APK. Take screenshots on the phone as you go (needed for submission).

- [ ] Home page opens and shows the title, intro and picture
- [ ] ☰ menu slides open and goes to Home, Menu and Contact
- [ ] Pages fade in and out when moving between them
- [ ] Menu: tapping **Order** shows "Added ✓", and the bar at the bottom shows the total
- [ ] Menu: the + / − buttons change the amount and the total updates correctly
- [ ] Menu: **Place order** shows the thank-you box, and **Back to menu** closes it
- [ ] Contact: sending an empty form shows the red messages
- [ ] Contact: a correctly filled form shows the thank-you message
- [ ] Everything fits on the phone screen (no sideways scrolling)

---

## 7. Simple analysis answers (Task 7)

**1. Who are the target users?**
People in Kuching who want Sarawak food (kolo mee, laksa, kek lapis) without queueing, like office workers, students and families. Most of them use their phones, so the site is made for small screens.

**2. What is the purpose of the application?**
To let customers see the menu with photos and prices, build an order and see the total price before they buy, and contact the shop for big orders or catering.

**3. Why did you use jQuery?**
It makes it quick to handle button clicks and add animations (fade, slide) with short, easy-to-read code. It also works the same way in all browsers and inside the Android app.

**4. What JavaScript functions did you implement?**
`calculateTotal()` adds up the items and price, `showOrderConfirmation()` shows the order confirmation, and `validateForm()` checks the contact form.

**5 & 6. What problem did you meet when converting to APK, and how did you solve it?**
⚠️ **Write what actually happens to you.** The lecturer may ask follow-up questions, so don't copy a made-up answer. Some common problems and fixes, in case you meet one:
- *AppGeyser needs a website link, not files*: upload the site to Netlify or GitHub Pages first.
- *The design looked broken with no internet*: Bootstrap and jQuery are already saved inside the project, which fixes this.
- *The menu was too cramped on a phone*: we added the ☰ phone menu.

---

## 8. Sitemap (submission item 7)

```
                 index.html (Home)
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    menu.html      contact.html       (Order now → menu.html)
  (Menu + Order)  (Contact form)
```
Every page links to every other page through the top menu.

---

## 9. Submission checklist

| # | Item | Status |
|---|---|---|
| 1–5 | Source code, HTML, CSS, JS/jQuery, images | ✅ Done: the whole project folder |
| 6 | APK file | ❌ **You**: see section 5 |
| 7 | Sitemap / wireframe | ✅ Section 8 above (you can redraw it neater) |
| 8 | Screenshots of the website | ✅ `docs/screenshots/` (desktop). Add phone ones too |
| 9 | Screenshot of the app on a phone | ❌ **You**: take them while testing the APK |
| 10 | Short documentation | ✅ These notes can be the base. Put them in your own words |
| 11 | Zip everything + cover page (name, class, student ID) | ❌ **You** |

---

## 10. File guide (if the lecturer asks "where is…?")

```
index.html          Home page
menu.html           Menu + ordering
contact.html        Contact form
404.html            "Page not found" page
css/style.css       Our design (colours, fonts, layout)
css/vendor/         Bootstrap (downloaded copy)
js/main.js          Page fade transitions + phone menu (all pages)
js/menu-data.js     List of dishes and prices; edit this to change the menu
js/menu.js          Order logic: calculateTotal(), showOrderConfirmation()
js/contact.js       Form checking: validateForm()
js/vendor/          jQuery (downloaded copy)
images/             Food photos
```
