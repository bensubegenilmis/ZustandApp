import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"; 

const CounterContext = createContext();

export const CounterContextProvider = ({ children}) => {
    const [count, setCount] = useState(0);

    const values = {
        count,
        setCount,

    };

    return (<CounterContext.Provider value= {values}>{ children}</CounterContext.Provider>);
    

};

export const useCounter = () => {

    const context = useContext(CounterContext);

    if(context === undefined){
        throw new Error('useCounter hook must be call in CounterContextProvider ');
    }

    return context;


};
