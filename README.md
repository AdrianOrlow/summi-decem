# Summi Decem

### App for display of programmers quotations
Name of the project derives from the language of Latin and the phrase "Summi Decem" means "top ten". Ten, because there are quotes by 10 authors.

Project demo is available at: http://bit.ly/summi-decem

# Getting started
Firstly, install dependencies:
```bash
> npm install
```

Then, in the project directory, you can run:

```bash
# To run the app in the dev mode
> npm start

# To build the app
> npm run build
```

# API Endpoints
##### _summi-decem.herokuapp.com/api/_
---
#### **Show all quotes**
Returns json data about all quotes in database.

* **URL**

  /quotes/

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"quotes": [{ "id": "49", "person_id": "10" }, ...] }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
---
#### **Show quotes by author**
Returns json data about author's quotes.

* **URL**

  /quotes/:pid

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `pid=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"quotes": [{ "id": "49", "person_id": "10" }, ...] }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
---
#### **Show quote**
Returns json data about a single quote.

* **URL**

  /quote/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 20, "text": "...", "author": "Linus Torvalds", "source": "...", "created_on": "2019-04-05 12:12:12"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
---
#### **Propose quote**
Adds new proposed quote

* **URL**

  /quote/

* **Method:**

  `POST`

*  **Body:**
```json
{
	"person_id": 7,
	"source": "https://google.com/",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
```

* **Success Response:**
  * **Code:** 200 <br />
* **Error Response:**
  * **Code:** 404 NOT FOUND
