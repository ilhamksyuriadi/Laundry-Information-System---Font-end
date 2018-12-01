# Laundry-Information-System---Font-end
-A front-end example with plain html and javascript

-Use express js for routing

# Quick start
-clone this repository

-open terminal on the same path with clone and write then enter: npm install

-still on the same terminal, write then enter: nodemon


there are 3 user: customer, employee and manager

-default path ('localhost:3000/') will display the customer page

-login path ('localhost:3000/login') will display the login page, you can login with:

employee
username : employee
password : 123

manager
username : manager
passowrd : 123

*note:
1. in case your port 3000 already in use, just change the app.listen(3000, .... ) on app.js
change the 3000 to any available port on your pc/laptop.
2. this example have no error handling(e.g: express-validator), make sure the inputs are complete
