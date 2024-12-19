# React Router Dom Catch-All Route Issue

This repository demonstrates a problem with React Router Dom's catch-all route (`*`).  The expectation is that when navigating to a non-existent route, the catch-all route will be displayed. However, in certain scenarios, this does not occur.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to a non-existent route (e.g., `/invalid-route`).

## Expected Behavior

The 'Not Found' component should be displayed.

## Actual Behavior

The application either displays nothing or the previous route.  The catch all route does not handle the missing route. 

## Solution

The solution involves ensuring that the `Routes` component is used correctly within the `BrowserRouter` and that the `*` route is placed at the end of the route definitions.  Further, nested routes should be considered as well to cover all scenarios. 