# Recruitment task no. 2


Recruitment task for AGH Space Systems. Basic API for communication with the database

## Requirements

Following stuff must be installed to run this app:

* [Node.js](https://nodejs.org/en/) version 12.8.0 or later


### Installing

1. [Clone or download](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository
`git clone https://github.com/Fadikk367/aghss-zad2.git
`,

2. Go to main directory of cloned repository,

3. Run `npm install` command in your console.

### Setting things up
In ".env" file you must assign some stuff to variables:

* DB_CONNECTION = < mongodb connection string here >

Visit [mongodb site](https://www.mongodb.com/cloud/atlas) for help, after logging in to MongoDB Atlas account go to: clusters > connect > connect your application, select version 2.2.12 or later (3.0.0 or later may cause some random authorization problems)


* DB_NAME = < database name >
* COLLECTION_NAME = < collection name >


### Running

Finally you can write `npm start` in your terminal (in project main folder). 

### API
If running locally, don't forget about "localhost:3000" prefix. If running on some hosting then your domain name is your prefix. "/addOne" route is built to handle data from request body.

* /getAll - getting all data from the database,
* /getOne/:id - getting single document with given id,
* /addOne - adding new document to the database,
* /delete/:id - deleting document with given id.


## Built With

* [Node.js](http://www.dropwizard.io/1.0.2/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express.js](https://maven.apache.org/) - Node.js server framework
* [MongoDB](https://rometools.github.io/rome/) - general purpose, noSQL, document-based database

