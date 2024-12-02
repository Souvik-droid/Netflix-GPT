# Netflix GPT

- Create React App
- Configured Tailwind
- Added a simple Netflix clone layout
- routing
- Header
- Login Form
- useRef
- Form Validation
- Authentication(Firebase)
    - firebase.js to connect to firebase fro react project
- Deploy the project to production
- Create a sign up user account
- Implement Sign In user Api
- Created our redux store with user slice
- Update Profile
- Bug Fix
    - Sign up user display name and profile picture update
    - if the user is not logged in, redirect browse to login page and vice-versa
- add hardcoded values to const values
- Fetch data from TMBD now playing movies API
    - Custom hook for nowPlaingMovies API
- Setting up a redux store
    - Create Movie Slice
    - Update store with movie list
- Planning for main container and secondary container
- Fetch data for Trailer Vdeo
- Update store with Trailer video data
- Embedded the youtube video and make it autoplay and mute

# Features

- Login/Sign up
    - Sign In/Sign up form
    - redirect to browse pag

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in bg
        - Movie Title & Details
        - Movie suggestions
            - MoviesLists * N
        - Register in TMDB API & create an app and get access token
        - fetch data from TMDB API "now playing" list
    
- Netflix GPT
    - Search Bar
    - Movie Suggestions
