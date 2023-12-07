import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    isShow: false
}


export const PopupModal = createSlice({
    name: 'PopupModal',
    initialState: initialData,
    reducers: {
        modalAction: (state) => {
            state.isShow = !state.isShow
        }
    }
})

export const {modalAction} = PopupModal.actions;
export default PopupModal.reducer
