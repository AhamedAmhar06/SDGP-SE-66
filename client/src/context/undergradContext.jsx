import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UndergradContext = createContext({});

export function UndergradContextProvider({children}){
    const [undergrad, setUndergrad] = useState(null);

    useEffect(() => {
        if(!undergrad){
            axios.get('/profile').then(({data}) => {
                setUndergrad(data);
            })
        }
    }, [])
    return(
        <UndergradContext.Provider value={{undergrad, setUndergrad}}>
            {children}
        </UndergradContext.Provider>
    )
}