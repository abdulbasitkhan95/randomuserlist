# Getting Started

This single page application is build with React JS

## Production Link

This project is also deployed on this link https://competent-mcclintock-fbb759.netlify.app/

## Task Requirements

The Requirements for this task are

Using https://randomuser.me/ to create a Rest API to return 10 users. Each user in the list contain user’s full name, username, email, DOB (in format (DD/MM/YYYY), address (street, city, country, postcode), phone number without any
hyphen (-) and picture (use thumbnail and on click use light box to show large image). Make a popup to show extra user's information by clicking on user's username. Implementation of pagination and Search by username. On page refresh user should be on same result.

## Packages used in this App

1) FontAwesome (using for Fonts)
2) React Redux (for using store)
3) Redux Toolkit (for using api calling and Redux Toolkit is redux recommended toolset)
4) React Paginate (For Pagination)
5) Sass (for compiling sass into css)
6) React Photoswipe Gallery (For Lightbox)
7) Moment (for date format)

## Task Details

The application has three major components first one is search bar where user search the identity. its a onChange property applied on input field so if user write or remove text, It'll directly filter out the result according to input field. another step is to call the users from API for that Redux Toolkit is using to make a query and use that query in toolkit service for API data calling. after that on profile image clicked, Profile image shows in large size using lightbox for that React Photoswipe Gallery is used to get a large size of image of the browser. On click of username, it shows popup for more details which is not shown directly on cards and last is pagination for that, React pagination 
is used for more than 10 users. Its a requirement to show atleast 10 users at a time. For Font, Fontawesome is used to give a eye catching effect on the App. This app is also responsive so its compatible with almost all devices.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

