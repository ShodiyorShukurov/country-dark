import { useState, createContext } from "react";
import PropTypes from "prop-types";

 const Context = createContext(null) 

 const Provider = ({children})=>{
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )

    const toggleTheme = () => {
        localStorage.setItem('theme', theme === 'light'?'dark':'light')
        setTheme(theme=='light'? 'dark':'light')
    }

    return(
        <Context.Provider value={{theme, toggleTheme}}>{children}</Context.Provider>
    )
 }

 Provider.propTypes ={
    children: PropTypes.object,
 }

 export {Context, Provider} 