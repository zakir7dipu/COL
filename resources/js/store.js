import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from "./Featurs/Menu/MenuSlice.js"
import PopupModalReducer from "./Featurs/PopupModal/PopupModalSlice.js"

const store = configureStore({
    reducer: {
        menuItems: MenuReducer,
        modalAction: PopupModalReducer
    }
})

export default store;
