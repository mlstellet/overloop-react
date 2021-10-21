import { useState, createContext } from "react"

export const BuscaContext = createContext();

const BuscaProvider = ({ children }) => {
    const [keyword, setKeyword] = useState({ keywords: 'it', location: ' '})
    const alterKeyword = (role, local) => {
        if (role === '') {
            setKeyword({keywords: 'it', location: local })
            return;
        }
        setKeyword({keywords: role, location: local})
    }
    return (
        <BuscaContext.Provider value = {{keyword, alterKeyword}}>
            { children }
        </BuscaContext.Provider>
    );

}

export default BuscaProvider;