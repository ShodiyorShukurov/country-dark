import React from "react";
import { PropTypes } from "proptype";

const Context = React.createContext()

const Provider = ({children})=>{
    const [country, setCountry] = React.useState([])
    return(
        <Context.Provider value={{country, setCountry}} >{children}</Context.Provider>
    )
}

Provider.propTypes ={
    children: PropTypes.object,
}

export {Context, Provider}