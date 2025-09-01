# QR Auth

A weird authentication system that has the user scan QR codes instead of entering a password. Users log in by scanning three QR codes that correspond to their favorite food, color, and hobby (which they get after registration). Once logged in, users can generate QR code and save them on the server.

## Demo

- **Frontend**: on GitHub Pages at `https://unstoppableblob.github.io/authly-proj/`
- **Backend**: on PythonAnywhere at `https://suspiciousitem.pythonanywhere.com`

# Docs

### Tech Stack

**Frontend:** (in frontend/frontend/ (yes, nested, not a typo))
- React + TS + Vite + Chakra UI
- React Router with HashRouter to route the single page app and make it usable on GitHub Pages
- @yudiel/react-qr-scanner for QR scanning
- localStorage for session management

**Backend:** (in backend/)
- Flask + JSON file to data storage


### Project Structure

**Frontend:**
- `src/App.tsx` contains the react router setup that routes to all the frontend pages
- `src/config.ts` sets the backend URL
- `src/pages` contains all the frontend pages
- `Home.tsx` is just a page with a Login and Register button
- `Register.tsx` is the registration page where users can sign up
- `Registration.tsx` is the page that displays the QR codes after successful registration
- `Login.tsx` is the login page where users can scan their QR codes to log in
- `AppPage.tsx` is the main app functionality page, where users can generate, save, and see their saved QR codes

**Backend:**
- `app.py` contains all the backend server code
- `data.json` is the data storage file

### Frontend Docs

**Registration:**
1. Go to the home page and click "Register"
2. Enter a unique username
3. Answer three questions:
- Favorite Food
- Favorite Color
- Favorite Hobby
4. Click "Register" to create your account
5. Save or print the three QR codes displayed (which contain your answers to the above 3 questions)
6. Then you can log in via the "Login" page (there's a button to take you there)

**Login:**
1. Click "Login" on the home page
2. Enter your username
3. Use your device's camera to scan each of your three QR codes, one at a time (a popup should appear with a camera preview to help with lining up the QR code)
4. Click "Login" to log in (the QR codes will be checked with the server, then saved to localStorage)
5. You will be taken to the actual app page

**App Usage:**
1. Enter text in the input
2. A QR code will be generated in real-time
3. Click "Save" to add the QR code to your history
4. View all saved QR codes in the "Saved History" section

### Backend API
- `GET /createuser/<username>/<word1>/<word2>/<word3>`: create a new user with the given username and login words
- `GET /loginuser/<username>/<word1>/<word2>/<word3>`: log in a user (basically just verify that the words are correct)
- `GET /gethistory/<username>`: get a user's QR code history
- `GET /addhistory/<username>/<qr_code>`: save a QR code to a user's history

### Data Structure

Users are stored in `data.json` like this:
```json
{
"username": {
"words": ["food", "color", "hobby"],
"history": ["qr_code_1", "qr_code_2", "etc."]
}
}
```

# Setup and run

### Backend
- `cd backend`
- `pip install flask flask-cors`
- make a `data.json` file next to the `app.py` and put `{}` in it
- `python app.py`

### Frontend
- `cd frontend/frontend`
- `npm install`
- `npm run dev` for development, `npm run build` for production build (saved to `frontend/frontend/dist`)
