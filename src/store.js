import { createStore } from 'redux';

//Reducer (funcion pura que regresa el estado actual)
const initialState = false;

const TSBAR = 'TSBAR'

const slSideBar = (state = initialState, action) => {
    
    switch(action.type){
        case 'TSBAR':
            return state = !state;
        
        // case 'DESPLEGAR':
        //     return state = false;

        default:
            return state;

    };
};

export const toggleSideBar = () => {
    return {
        type: TSBAR
    }
}

// store.getState()
// store.dispatch({})
// store.subscribe()

//Store (Almacenamiento de nuestro estado)
const store = createStore(slSideBar);

export default store;