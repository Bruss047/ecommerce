import thunk from 'redux-thunk';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import { productReducer } from '../reducers/productReducer';
import { cartReducer } from './../reducers/cartReducer';
import { orderReducer } from './../reducers/orderReducer';
import { authReducer } from './../reducers/authReducer';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //para tener habilitada la extension del devtools y usar middlewares.

//const persistedReducer = persistStore(persistConfig, cartReducer);

const reducers= combineReducers({
    auth:authReducer,
    products:productReducer,
    cart: cartReducer,
    orders: orderReducer
});



const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, reducers);    

export const store= createStore(
    
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

export const persistor = persistStore(store);


//export {persistor, store};