# Presentation Notes: Catalina Foodie's House

**Theme chosen:** No. 2, Foodies (Food Website)
**Built with:** HTML, CSS + Bootstrap 5, jQuery, basic JavaScript
**How to open:** double-click `index.html`. No internet or server needed.

---

## 1. The 3 pages (Task 1)

| Page | File | What the assignment asks for | What we have |
|---|---|---|---|
| Home | `index.html` | Website title, short intro, at least 1 image, navigation menu | Title "Welcome to Catalina Foodie's House", intro, a food photo, and the dark menu bar at the top |
| Main Content | `menu.html` | Food name, food image, price, Order button | 6 food cards, each with a photo, name, price and a green **Order** button |
| Contact / Form | `contact.html` | Name, Email, Message, Submit button | Form with Name, Email, Message, a consent tick box and a **Submit** button |

- The **navigation menu** is a Bootstrap navbar. On a phone it becomes a **☰ button**.
- The **layout** uses the Bootstrap grid (`row`, `col-md-4`): 3 cards per row on a computer, 1 per row on a phone.

---

## 2. jQuery functions (Task 2: need at least 3, we have 6)

| jQuery function | What the user sees | Where to show it | Code |
|---|---|---|---|
| `click()` | Buttons react when clicked | Any button | `js/menu.js` line 41 |
| `fadeIn()` | Every page fades in when it opens | Open any page | `js/main.js` line 5 |
| `slideToggle()` | "Read our story" text slides open and closed | Home page, **Read our story** button | `js/main.js` line 9 |
| `slideDown()` | The "Your Order" box slides open | Menu page, click **Order** | `js/menu.js` line 49 |
| `slideUp()` | The order box slides closed | Menu page, **Place Order** or **Clear** | `js/menu.js` lines 35, 64 |
| `fadeIn()` + `fadeOut()` | "Added!" appears next to the button, then disappears | Menu page, click **Order** | `js/menu.js` line 52 |
| `hide()` | Hides an old message | Menu and Contact pages | `js/menu.js` line 48, `js/contact.js` line 50 |

**Simple way to explain it:** "jQuery lets me react to clicks and add effects like fade and slide with one short line, e.g. `$("#orderBox").slideDown();`"

---

## 3. JavaScript functions (Task 3: need at least 2, we have 3)

| Function | What it does | Code |
|---|---|---|
| `calculateTotal()` | Uses a **for loop** to add up the price of every dish in the order | `js/menu.js` line 6 |
| `showOrderConfirmation()` | Shows "Thank you for your order!" with the number of items and the total | `js/menu.js` line 25 |
| `validateForm()` | Checks the contact form (see section 4) | `js/contact.js` line 4 |

**How the order works:**
1. Each **Order** button stores the dish name and price in the HTML: `data-name="Kolo Mee" data-price="7.50"`.
2. On a click, the dish is added to an array called `orderItems`.
3. `calculateTotal()` loops through the array and adds up the prices.
4. The list, the number of items and the total are shown in the "Your Order" box.

**How to demo:** click **Order** on Kolo Mee twice and Sarawak Laksa once.
The box shows **Items: 3** and **Total: RM 24.00** (7.50 + 7.50 + 9.00 = 24.00).
Then click **Place Order**, and the green thank-you message appears.

---

## 4. Form validation (Task 4)

`validateForm()` checks each field. If something is wrong, a **red message** appears under that field and the form is not sent.

| Check | Error message |
|---|---|
| Name is empty | "Please enter your name." |
| Email is empty | "Please enter your email." |
| Email is the wrong format (e.g. `ali@`) | "Please enter a valid email, e.g. ali@example.com" |
| Message is empty | "Please enter a message." |
| Consent box not ticked | "Please tick the box to agree." |

If everything is correct, the form is emptied and a green "Thank you!" message fades in.

**How to demo:** click **Submit** with everything empty, so all the red messages appear. Then fill everything in, tick the box and submit again.

### Ethics (rubric item d: "ethical data handling")
- The **consent tick box** means the user must agree before their name and email are used, and only to reply.
- The website **does not save or send** anyone's data.
- The order message says honestly: *"This is a school project, so no real order was sent."*
- Every image has **alt text** (a description for people who can't see the image).

---

## 5. Convert to APK (Task 5): YOU need to do this part

1. Put the website online for free. The easiest way is **Netlify Drop** (app.netlify.com/drop): drag the whole project folder in and it gives you a link. GitHub Pages also works.
2. Open that link on your phone's browser first and check it works.
3. Go to **AppGeyser** → create an app with the **Website** template → paste your link.
4. Name it "Catalina Foodie's House", pick an icon, and download the APK.
5. Install it on an Android phone and test it (section 6).

Bootstrap and jQuery are saved **inside the project** (`css/vendor`, `js/vendor`), so the app doesn't depend on downloading them from other websites.

---

## 6. Testing checklist (Task 6)

Tick these on **both** the browser and the APK. Take phone screenshots as you go (needed for submission).

- [ ] Home page shows the title, intro and picture
- [ ] **Read our story** slides the text open and closed
- [ ] ☰ menu opens and goes to Home, Menu and Contact
- [ ] Each page fades in when opened
- [ ] Menu: **Order** shows "Added!" and the order box slides down
- [ ] Menu: the total is correct (e.g. 2× Kolo Mee + 1× Laksa = RM 24.00)
- [ ] Menu: **Place Order** shows the thank-you message, and **Clear** empties the order
- [ ] Contact: an empty form shows the red messages
- [ ] Contact: a correct form shows the green thank-you message
- [ ] Everything fits on the phone screen

---

## 7. Simple analysis answers (Task 7)

**1. Who are the target users?**
People in Kuching who like Sarawak food, like students, office workers and families. Most of them use phones, so the site works on small screens.

**2. What is the purpose of the application?**
To show the menu with photos and prices, let customers pick dishes and see the total price, and let them contact the shop.

**3. Why did you use jQuery?**
It makes handling button clicks and adding effects (fade, slide) quick and easy, with short code that works the same in all browsers and inside the Android app.

**4. What JavaScript functions did you implement?**
`calculateTotal()` adds up the price, `showOrderConfirmation()` shows the order confirmation, and `validateForm()` checks the contact form.

**5 & 6. What problem did you meet when converting to APK, and how did you solve it?**
⚠️ **Write what actually happens to you.** Your lecturer may ask follow-up questions. Some common ones, in case you meet them:
- *AppGeyser needs a website link, not files*: upload the site to Netlify or GitHub Pages first.
- *The design is broken without internet*: already solved, because Bootstrap and jQuery are saved inside the project.

---

## 8. Sitemap (submission item 7)

```
             index.html (Home)
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     menu.html           contact.html
   (Menu + Order)       (Contact form)
```
All 3 pages are linked to each other through the menu bar at the top.

---

## 9. Submission checklist

| # | Item | Status |
|---|---|---|
| 1–5 | Source code, HTML, CSS, JS/jQuery, images | ✅ The whole project folder |
| 6 | APK file | ❌ **You**: section 5 |
| 7 | Sitemap / wireframe | ✅ Section 8 (you can redraw it neater) |
| 8 | Screenshots of the website | ❌ **You**: take them on your computer and phone |
| 9 | Screenshot of the app on a phone | ❌ **You**: while testing the APK |
| 10 | Short documentation | ✅ Use these notes as a base, in your own words |
| 11 | Zip everything + cover page (name, class, student ID) | ❌ **You** |

---

## 10. File guide (if the lecturer asks "where is…?")

```
index.html                  Home page
menu.html                   Menu + order box
contact.html                Contact form
css/style.css               My own CSS (small; Bootstrap does most of it)
css/vendor/bootstrap.min.css        Bootstrap
js/main.js                  Page fade-in + "Read our story" (all pages)
js/menu.js                  calculateTotal(), showOrderConfirmation()
js/contact.js               validateForm()
js/vendor/jquery-3.7.1.min.js       jQuery
js/vendor/bootstrap.bundle.min.js   Bootstrap's JavaScript (for the ☰ menu)
images/                     Food photos
```
