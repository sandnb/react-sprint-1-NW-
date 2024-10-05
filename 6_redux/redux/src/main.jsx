import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import store from  "./redux/store.js"
import App from './App.jsx'
import './index.css'
import User from './components/normalComponents/User.jsx'

createRoot(document.getElementById('root')).render(

   <>
     <Provider store={store}>
        <App />
    </Provider> 
   </>
    
 ,
)
