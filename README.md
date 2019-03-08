# Sprint Challenge: Redux - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Redux, Redux I - II and Async Redux I - II. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout Redux and your command of the concepts and techniques in the Redux I - II and Async Redux I - I modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build the Smurfs village once again, only this time, you will utilize Redux as your state management. Don't use any old code from your previous Smurfs Sprint Challenge. Build this challenge from the ground up using Redux.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects which always contain a type property, and may include a payload property.  I like to think of Actions as folders. The type property is the "label" so to speak on the Actions folder.  The payload property, is the data or information that is organized and stored inside that folder.
Reducers receive all actions and organize them by type and then carry out instructions specified within that reducer case to update the store with the most current information.  Reducers will check all actions against their case types.  If the case type matches the action type, the reducers "return" code will then execute.  If not action type is matched with the reducers case type, the reducer will default to a specified instruction.
The store is a centralized object containing all the information to be shared with the Application.  With an object existing like the store, you can specifically choose which pieces of information you would like to share with certain components, and pass only those pieces of data through mapStateToProps.  This gives the store a lot of power, in terms of effeciency and ease of access.  Due to this structure of having the store exist as one object, it is referred to as a 'single source of truth' because you only have to reference one source, the store, for any data your App or Component may need.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that exists on the upper most level of the Application.  Application state can be available to the entire Application (if passed through properly).
Component state is state that exists only in a specific component.  Component state may be passed down to any components nested within that state-ful component, but may not pass any data up to components above that components level.  This is great to use when you have a component that needs to reference its own state for UI purposes, but doesn't need to share that state's data with the entire application.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that is capable of stopping actions, forwarding actions untouched, dispatching different actions, and dispatching multiple actions.
Redux-thunk allows developers the ability to handle asynchronous operations within our Action Creators.  This changes our Action Creators by allowing developers to make dispatch calls within our Action Creators.  This makes redux-thunk quite a powerful tool for developement within redux applications.


## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`.
We've added a typical `redux` file structure for you:

```
src
  - components
  - reducers
    - index.js
  - actions
    - index.js
```

This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Start in the `index.js` file by following all the prompts there to ensure that `Redux-Thunk` is wired up properly.
- [ ] Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate:

```js
return dispatch => {
  dispatch({ type: FOO_ACTION_TYPE });
  promise.then(({ data }) => {
    dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
  });
};
```

**API Design** - This is how you'll interface with the API and what is required from every endpoint.

### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
];
```

### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  },
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1
  }
];
```
