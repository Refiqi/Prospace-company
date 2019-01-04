# Prospace-company-test
Nodejs Web app for managing the company and corresponding offices.
First of all Thankyou for taking your time to look through my test.
I know that the required implementation is in reactjs, but unfortunately i haven't learnt reactjs yet, so i build it in nodejs.



#### First Step Initial

The first thing that i did is creating the git repositories in github then clone the repositories to my local, after that i initialized npm with the command `npm init`.
Installing module express, express-handlebars.
Express for framework and Handlebars for the views engine.

Creating file app.js for the main application.

Creating folder :
- routes for the application routes,
- models for the application models,
- helpers for helpers method if by chance i needed it
- public for css,js,vendor stylyling the views

#### Second step Server and pages

Initializing the express server in app.js,
I'm using handlebars because handlebars is easy to costumize with helpers or if you want to iterate data in html.
Creating folder views for handlebars layouts,partials.Creating the views for overview page with forms.

#### Third step Database and Models

once the forms are ready, create the database using mongoDB with mongoose.
Connecting to database in app.js,then start creating models for the forms.
I'm Validating in the server-side too with required options so that if the fields in the form is not inputted then the server will throw an error to the console. and for the office model im including the companies model so that the office db can  be related to companies db.

#### Fourth step Routes

Creating the routes for overview,company, and office. im doing the routes seperately from app.js because i don't want the app.js to be unorganized, because of that im loading the routes and using them in app.js with just one-line code.

- in the routes overview or the index page:

im implementing the layouts to be like home.handlebars in views/layouts so that all request be it GET or POST will render the home layouts.
im displaying dynamic data in companies db to be shown in the overview page with a mongoose function.

- Company routes:

I'm creating the POST routes for inserting the inputted data in forms to the database of course im validating the inputted data in the client-side too so that the revenue and the phone number should only accepts positive number. Creating the GET routes for displaying the company by its id that will take it to office page and it will display dynamic data with the Associated office if the company have office created. Creating DELETE routes by its id.

- Office routes:

I'm creating the POST routes for inserting the inputted data in forms to the database of course im validating the inputted data in the client-side too so that the Location latitude and longitude should only accepts positive number.Creating DELETE routes by its id.


##### Helpers for handlebars

I need a Function that will check if there's data to be displayed in the overview page and office page so i created the isEmpty function, it will check if for example the company data is empty or not. if it is empty then it will return 'there is no company created yet' else it will return the company data.

for the generateDate it's for Beautify the date that will be displayed in office page so that it will be easier to read because the date in The database have too much information to be displayed.

##### Session and Flash message

I need a flash for telling the user that what the user inputted have been saved or if there's an error so that the user will know.
Using connect-flash and express-session because the flash need a session so that the flash can operate.And Creating local Variables with middleware for flash. 

##### Method Override

It's a package npm that will override the method request from the form.because the form in html only support GET or POST Method.because I want to use the best-practices. for example if I want to delete data I'm requesting a delete routes.
















