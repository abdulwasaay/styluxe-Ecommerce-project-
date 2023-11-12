const { createContext, useState } = require("react");

const cart = createContext({});
export default cart;

export function Datahandler({ children }) {
    const [state, setState] = useState([]);
    const setdataHandler = (id,title, price, image) => {
        setState([...state , {
            id,title, price, image
        }])
    }
    return (
        <cart.Provider value={{ state, setdataHandler }}>
            {children}
        </cart.Provider>
    )
}