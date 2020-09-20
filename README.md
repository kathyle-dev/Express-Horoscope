# Express Horoscope Generator

#### Project Scope: Update previous Horoscope Generator to use Express. The user enters their birth date in MM and DD. On the click of the button, the client side evalutes the date submitted and sends a request to the back end server with the corresponding sign. Then the server responds with the user's sign's name, image, and description. Here they can also click on the icons of the other horoscope signs to learn more about them.

- Try it Here: https://express-horoscope.herokuapp.com/
![Horoscope Generator Home Screenshot](/horoMain.png)
![Horoscope Generator Display Screenshot](/horoDisplay.png)

# How it was made:
#### HTML5, CSS3, Javascript, API, JSON, Node.js, Express, EJS, MongoDB

# Optimizations:
#### Calculation of user's sign is done client side is sent to a back end server created with Node.js. The database (MongoDB) houses each sign's name, image, and description which is sent back to the client via a filtered method. This hides the other sign's information from users.

# Lesson Learned:
#### I was able to keep client side javascript minimal by keeping all of the horoscope information within MongoDB. I also learned the use of the "params" property to help pinpoint the data I wanted the API to find and send back to me.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `npm run horoscope`
2. Navigate to `localhost:8000`
