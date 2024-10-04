
- button  of type (submit) vs button (button)

- npm i slugify (what's slug?)

- npm i express-formidable (handle file uploads easily)

- slug vs /:id


#### Context in React 


- Context provides a way to share values and functions (data) between componenets without explicitly passing them as props through every level of the component tree. It allows us to avoid prop drilling, which is when we have to pass props thorugh many layers of components, even if only the deepest components need that data. 

- React Context is a global variable (or state) that can be passed to multiple components across different levels in the component hierarchy, without having to pass the data as props through each component manually. 


- In many applications, we have pieces of state or data that multiple components need access to, but those components might not be directly connected in the hierarchy. Without Context, we have to "drill" the data down as props through each component, even if some components don't use it. This becomes cumbersome and makes our code less clean and harder to maintain. 

    For example, in an e-commerce app, multiple components (product listing, cart summary, checkout, etc) may need access to the cart state. Instead of passing the cart state through all intermediate components, Context allows these components to directly access the cart, making the code simpler and more efficient. 

- Context is created with 'createContext' and a 'Provider' is used to make the data available to any child components. A custom hook (useContext) is then used to access the context in those child components. 

