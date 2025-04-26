import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import quizReducer from "./quizRedux"; 

import {FLUSH,persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};



const rootReducer = combineReducers({ user: userReducer, cart: cartReducer,quiz: quizReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
            
    })
    
})

export let persistor = persistStore(store)



