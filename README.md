# ExpressBoilerplate
Boilerplate code for express backend with firestore db

# Requirements
## OPTION 1: Save credentials to environment variable
1. Uncomment OPTION 1 in `app.js` 
2. `.firebase` folder in project root
    - Add your firebase json credential to this folder and rename to `service-account.json`
3. `.env` file in project root
```
PORT = 3000
GOOGLE_APPLICATION_CREDENTIALS = .firebase/service-account.json
```
## OPTION 2: Provide Full Path to the credentials json
1. Uncomment OPTION 2 in `app.js` 
2. `.env` file in project root
```
PORT = 3000
```