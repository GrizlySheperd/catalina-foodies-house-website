# Presentation Notes: Sharifah Fresh Bakery

**Theme chosen:** No. 2, Foodies (Bakery Website)
**Built with:** HTML, CSS + Bootstrap 5, jQuery, basic JavaScript
**How to open:** double-click `index.html`. No internet or server needed.

---

## 1. The 3 pages (Task 1)

| Page | File | What the assignment asks for | What we have |
|---|---|---|---|
| Home | `index.html` | Website title, short intro, at least 1 image, navigation menu | Title "Welcome to Sharifah Fresh Bakery", intro, a bakery photo, and the pink menu bar at the top |
| Main Content | `menu.html` | Food name, food image, price, Order button | 6 bakery cards, each with a photo, name, price and a rose-pink **Order** button |
| Contact / Form | `contact.html` | Name, Email, Message, Submit button | Form with Name, Email, Message, a consent tick box and a **Submit** button |

- The **navigation menu** is a Bootstrap navbar. On a phone it becomes a **☰ button**.
- The **layout** uses the Bootstrap grid (`row`, `col-md-4`): 3 cards per row on a computer, 1 per row on a phone.

---

## 2. jQuery functions (Task 2: need at least 3, we have 6)

| jQuery function | What the user sees | Where to show it | Code |
|---|---|---|---|
| `click()` | Buttons react when clicked | Any button | `js/menu.js` line 77 |
| `fadeIn()` | Every page fades in when it opens | Open any page | `js/main.js` line 5 |
| `slideToggle()` | "Read our story" text slides open and closed | Home page, **Read our story** button | `js/main.js` line 9 |
| `slideDown()` | The "Your Order" box slides open. The address box also slides open when **Cash on Delivery** is ticked | Menu page, click **Order**, then tick COD | `js/menu.js` lines 85, 102 |
| `slideUp()` | The order box slides closed. The address box slides closed when **Pickup** is ticked | Menu page, **Place Order**, **Clear** or tick Pickup | `js/menu.js` lines 62, 104, 114 |
| `fadeIn()` + `fadeOut()` | "Added!" appears next to the button, then disappears | Menu page, click **Order** | `js/menu.js` line 88 |
| `hide()` | Hides an old message | Menu and Contact pages | `js/menu.js` line 84, `js/contact.js` line 50 |

**Simple way to explain it:** "jQuery lets me react to clicks and add effects like fade and slide with one short line, e.g. `$("#orderBox").slideDown();`"

---

## 3. JavaScript functions (Task 3: need at least 2, we have 4)

| Function | What it does | Code |
|---|---|---|
| `calculateTotal()` | Uses a **for loop** to add up the price of every item in the order | `js/menu.js` line 6 |
| `validateOrderDetails()` | Checks that **Cash on Delivery** or **Pickup** is ticked, and that an address is typed for COD | `js/menu.js` line 25 |
| `showOrderConfirmation()` | Shows "Thank you for your order!" with the number of items, the total and the COD address or pickup message | `js/menu.js` line 44 |
| `validateForm()` | Checks the contact form (see section 4) | `js/contact.js` line 4 |

**How the order works:**
1. Each **Order** button stores the item name and price in the HTML: `data-name="Butter Croissant" data-price="4.50"`.
2. On a click, the item is added to an array called `orderItems`.
3. `calculateTotal()` loops through the array and adds up the prices.
4. The list, the number of items and the total are shown in the "Your Order" box.
5. The customer ticks **Cash on Delivery (COD)** or **Pickup at the bakery** (radio buttons, so only one can be ticked). Ticking COD slides open an **address box**. Pickup needs no address.
6. **Place Order** runs `validateOrderDetails()`. If something is missing, a red message appears and the order is not placed.

| Check | Error message |
|---|---|
| Neither option is ticked | "Please choose Cash on Delivery or Pickup." |
| COD ticked but the address is empty or too short (under 10 characters) | "Please enter your full delivery address." |

**How to demo:** click **Order** on Butter Croissant twice and Sourdough Loaf once.
The box shows **Items: 3** and **Total: RM 21.00** (4.50 + 4.50 + 12.00 = 21.00).
Click **Place Order** without ticking anything to show the red message. Tick **Cash on Delivery**, so the address box slides open, and type an address. Then click **Place Order** and the green thank-you message shows the address. Try again with **Pickup**: no address is needed, and the message says to pick it up at the bakery.

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
- The website **does not save or send** anyone's data. This includes the delivery address typed in the order box: it is only shown in the confirmation message and is cleared afterwards.
- The order message says honestly: *"This is a school project, so no real order was sent."*
- Every image has **alt text** (a description for people who can't see the image).

---

## 5. Convert to APK (Task 5): YOU need to do this part

1. Put the website online for free. The easiest way is **Netlify Drop** (app.netlify.com/drop): drag the whole project folder in and it gives you a link. GitHub Pages also works.
2. Open that link on your phone's browser first and check it works.
3. Go to **AppGeyser** → create an app with the **Website** template → paste your link.
4. Name it "Sharifah Fresh Bakery", pick an icon, and download the APK.
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
- [ ] Menu: the total is correct (e.g. 2× Butter Croissant + 1× Sourdough Loaf = RM 21.00)
- [ ] Menu: **Place Order** with nothing ticked shows a red message
- [ ] Menu: ticking **Cash on Delivery** opens the address box, and ticking **Pickup** closes it
- [ ] Menu: COD with an empty address shows a red message
- [ ] Menu: **Place Order** with COD + address (or Pickup) shows the thank-you message, and **Clear** empties the order and the ticks
- [ ] Contact: an empty form shows the red messages
- [ ] Contact: a correct form shows the green thank-you message
- [ ] Everything fits on the phone screen

---

## 7. Simple analysis answers (Task 7)

**1. Who are the target users?**
People in Kuching who like fresh bread and cakes, like students, office workers and families. Most of them use phones, so the site works on small screens.

**2. What is the purpose of the application?**
To show the menu with photos and prices, let customers pick bakery items, see the total price and choose Cash on Delivery (with an address) or Pickup, and let them contact the shop.

**3. Why did you use jQuery?**
It makes handling button clicks and adding effects (fade, slide) quick and easy, with short code that works the same in all browsers and inside the Android app.

**4. What JavaScript functions did you implement?**
`calculateTotal()` adds up the price, `validateOrderDetails()` checks that COD or Pickup is chosen (and an address for COD), `showOrderConfirmation()` shows the order confirmation, and `validateForm()` checks the contact form.

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
js/menu.js                  calculateTotal(), validateOrderDetails(), showOrderConfirmation()
js/contact.js               validateForm()
js/vendor/jquery-3.7.1.min.js       jQuery
js/vendor/bootstrap.bundle.min.js   Bootstrap's JavaScript (for the ☰ menu)
images/                     Bakery photos (CC0 from Wikimedia Commons)
```
