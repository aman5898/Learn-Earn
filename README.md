# Learn-Earn

- Controllers Folder contains the Function that does the work when api will be called.
- Model Folder contains different models to be generated from schemas, I have kept four different files here for reference, Ideally we should delete them and create our own models.
- Routes Folder I guess no need to explain.
- The file dbDataInsertionMethod contains diff methods to perform operation on Database.
- I have setup script in package.json to start the server via nodemon inserting .env file data (In case this doesn't make sense just use

```
npm start
```

- Before running the server create a .env file in root directory and inside the file write

```
mongoDBConnectionString="secret"
```

( No let or const anything)(secret will be shared to you via whatsapp as github gives warning and email both while uploading secrets.)

- To get Auth token visit '/api/auth/google' then login your self and you will get token.
- Now to access protected api's pass in header x-auth-token as key and token as value.
- To make an api protected you have to pass requireJwtAuth as middleware for e.g, see routes/comments.js you will find a protected api.


## React and Redux is present in src folder

### To run frontend and backend together use (here backend will be served via node)
```
npm start
```

### To run only frontend use
```
npm run start:dev
```

### To run Backend only with nodemon use
```
npm run start:api_backend
```

### To run Backend only with node use
```
npm run start:api_frontend
```
