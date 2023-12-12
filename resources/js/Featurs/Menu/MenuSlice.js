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
    drawerMenu: false,
    isOpenBackendSideNav: true,
    rightHeader: {
        messageBtn: false,
        notificationBtn: false,
        languageBtn: false,
        profileBtn: false,
    }
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
        },
        backendSideNaAction: (state) => {
            state.isOpenBackendSideNav = !state.isOpenBackendSideNav
        },
        rightHeaderAction: (state, {payload}) => {
            let actions = Object.keys(state.rightHeader).map(key => ({
                key: key,
                value: payload === key ? !state.rightHeader[key]:false
            }));
            state.rightHeader = actions.reduce((acc, obj) => {
                acc[obj.key] = obj.value;
                return acc;
            }, {});
        }
    }
})

export const {setActiveMenu,mobileMenuAction, backendSideNaAction,rightHeaderAction} = MenuSlice.actions
export default MenuSlice.reducer
