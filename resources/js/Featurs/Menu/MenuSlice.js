import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    menus: [
        {
            link: '/',
            isActive: false,
            page: "Home"
        },
        {
            link: route('about'),
            isActive: false,
            page: "About"
        },
        {
            link: route('events'),
            isActive: false,
            page: "Events"
        },
        {
            link: route('courses'),
            isActive: false,
            page: "Courses"
        },
        {
            link: route('blog'),
            isActive: false,
            page: "Blog"
        },
        {
            link: route('gallery'),
            isActive: false,
            page: "Gallery"
        },
        {
            link: route('contact'),
            isActive: false,
            page: "Contact"
        }
    ],
    drawerMenu: false
}

export const MenuSlice = createSlice({
    name: 'MenuSlice',
    initialState: initialData,
    reducers: {
        setActiveMenu: (state, {payload}) => {
            const updatedArray = state.menus.map((obj) =>
                obj.page === payload ? { ...obj, isActive: true } : {...obj, isActive: false}
            );
            state.menus = updatedArray;
        },
        mobileMenuAction: (state) => {
            state.drawerMenu = !state.drawerMenu
        }
    }
})

export const {setActiveMenu,mobileMenuAction} = MenuSlice.actions
export default MenuSlice.reducer
