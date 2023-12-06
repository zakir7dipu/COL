import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from "./Featurs/Menu/MenuSlice.js"

const store = configureStore({
    reducer: {
        menuItems: MenuReducer
    }
})

export default store;
