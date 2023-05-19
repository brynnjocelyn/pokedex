# Feedback

I implemented the search for a pokemon with a last 10 search history (this could be adjusted to any number). I store both the list of names for last 10 pokemon searches and a separate list of the entire pokemon objects for the last 10 searches in state as well. Using that list I added a check in the redux store to check if the user searches for a pokemon that already exists in the state store and if so we serve up the data directly from the store instead of making an additional API request, otherwise we go out and request the data from the API. This improves the application performance for the user.

The user can click on the pokemon name in the history list to automatically perform a search for that pokemon. The user can click on the listed abilities to get additional information about that ability, the same applies to the list of moves listed under details. The additional information is displayed in a simple modal.

There are some rudimentary css breakpoints to handle various viewport widths.

I didn't get to some of the bonus items like the following:

- displaying additional info for species, sprites and types upon searching. That would work in a similar manner to moves and abilities. Actually I would ask a clarifying question as to if it was desired to be able to input species, sprites, types, moves, abilities etc. into the search box in addition to the pokemon names or if simply allowing them to be clickable on each set of pokemon data that is displayed is sufficient.
- Adding tests for the business logic.
  -- I started this but ran into an issue with the importing of the axios library within the test so I skipped that for times sake.
- Adding the ability to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.

If I had more time there’s lots of other things that could be done.

- Adding typeahead hints to the search box for pokemon names
- Debounced search instead of having to click on search button
- Placing the search history in a slide in side menu on small screens
- Add overlay click to close modal
- Loading spinners needed when requesting data from API
- Finish testing
- Improve typings (insure no any types)
- Add user language detection and check if information exists in the user’s native language and display that data with a fallback to “en” if it doesn’t exist in their language

Some things to consider if running this app concurrently.

- Error Handling: In concurrent environments, error handling becomes more critical. If an error occurs in one part of the application, it shouldn't affect the rest of the application. You would need robust error handling and potentially ways to recover from errors.
- Loading States and UI Feedback: When running in a concurrent environment, certain tasks may take longer to complete. It's essential to provide feedback to the user that something is happening in the background. This could be a loading spinner or some other form of progress indication.
- Database Operations: If your application interacts with a database, you'll need to handle concurrent database operations. This could involve dealing with transactions, preventing race conditions, and ensuring data consistency.
- Server-Side Rendering (SSR) or Static Site Generation (SSG): For a React application, if you want to make the application faster and more performant for users, you might consider implementing SSR or SSG. This might require changes in how the application is structured and how data is fetched.
- Microservices: Depending on the complexity of your application, you might need to consider breaking down your application into smaller, independent services (microservices). Each microservice can handle different parts of your application, improving scalability and maintainability.

I liked the challenge. There’s not enough time to get everything done so you’re forced to make decisions as to what to complete and what to leave out, which can reveal a lot about how you approach development as a developer.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
