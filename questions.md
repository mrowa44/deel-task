1. What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponent implements `shouldComponentUpdate` method doing shallow comparison when props or state change. A pure component can help with performance issues by not re-rendering the component but it will also not render any of it's children which can be a problem with deeply nested components.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that? 

`shouldComponentUpdate` decides if the component should update based on props and state, if it returns false, all of it's children won't update either, which if we're using context api might mean that for example a higher (in the tree) component will have a new context value but a deeper in the tree component (blocked by `shouldComponentUpdate`) didn't re-render with a new value and is still using the old one.

3. Describe 3 ways to pass information from a component to its PARENT. 

- Using a function passed down in a prop
- Using context api
- Using a state management like Redux


4. Give 2 ways to prevent components from re-rendering. 

`PureComponent`/`React.memo` or by adding `shouldComponentUpdate`

5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment element can used as a container, when a component needs to return multiple children, without adding unneeded extra tags.  jsx will only render if we pass one "parent" node with children.

6. Give 3 examples of the HOC pattern. 

- `React.memo`
- Redux's `connect`
- `reduxForm` from redux-form

7. what's the difference in handling exceptions in promises, callbacks and async...await. 

For promises `.catch(() => {})` is used, for callback and async/await you wrap a `try catch` clause around to handle errors.

8. How many arguments does setState take and why is it async.

Two, first can be either an object with state to update or a function, second is a callback. It's async because React might decide to batch or otherwise wait with rendering, we should use the callback if we need to use new state value right away because it's guaranteed to have the newest value.

9. List the steps needed to migrate a Class to Function Component.

- Change class to function
- Migrate `render` to function body
- Change the state variables to `useState` statements, and use the returned state value and `setMyVariable` instead of `this.setState` 
- Migrate lifecycle methods to `useEffect`
- Test if it's still working

10. List a few ways styles can be used with components.

- `style` attribute → `style={{ color: 'red' }}`
- import classes from css and use like: `className={styles.myClass}`
- styled-components library

11. How to render an HTML string coming from the server.

`<div dangerouslySetInnerHTML={{__html: 'here html code'}} />`


