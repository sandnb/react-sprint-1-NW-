# Key things in React 
1. For any component , we have below 4 elements that we need to take care:
    * State in Component
    * Event Handlers
    * UI
    * Business Logic

2. State Management Library:
            a. State Management
                * set the state
                * update the state
            b. If we are given with reallife application
                * 1000s of component
                * passing the state as props to required component is challenging
            c. Problem with Complex application
                * Individual State Management
                * Prop Drilling -> 1000s of components if there is a common state then we,
                                   need to send the state to some child component we need to send the state variable as props.
            d. we can have a state Management Library
                * Central State Management
                * Avoid Prop Drilling

## Redux    
    * Third party JS library for state management
    * It gives features known as store -> where we store all the state variables
    * It also provides centralized state management with help of features known : slice

### Principles of Redux
    * Single Source of the Truth -> we can only have one store in whole app. we can
                                    have multiple slices
    * State is Read only -> when you want to update the state, then we have to
                            dispatch a "action" on object that describes what happend
    * Changes are made by pure functions -> To specify how to change a state 
                                            action is passed to the reducer function