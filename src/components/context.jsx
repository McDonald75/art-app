import { createContext, useState } from "react";

const Context = createContext()
const Provider = ({children})=>{
    const [arts, setArts] = useState([])
    const [originalArts, setOriginalArts] = useState([])
    const [refresh, setRefresh] = useState([])


    return(
        <Context.Provider value={{arts, setArts,refresh, setRefresh, originalArts, setOriginalArts}}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, 
    Provider
}