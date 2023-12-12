// import Notify from "./notify.js";
// import AuthUser from "../model/authUser.js";

// export function errorMessage(error) {
//     Notify("error", error?.message)
// }
//
// export function errorResponseMessage(error) {
//     if (error.response) {
//         if (error.response.status === 401) {
//         } else {
//             let errorObject = error.response.data.errors;
//             let hasError = Object.getOwnPropertyNames(errorObject)
//             if (hasError) {
//                 hasError.forEach(err => {
//                     Notify("error", errorObject[err][0])
//                 })
//             } else {
//                 Notify("error", error.response.data.message)
//             }
//         }
//     }
// }
//
// export function successMessage(success) {
//     Notify("success", success)
// }
//
// export function infoMessage(info) {
//     Notify("info", info)
// }
//
// export function warningMessage(warning) {
//     Notify("warning", warning)
// }

export const highlightKeyword = (string, highlightWord, position) => {
    let stringArray = string.split(" ");
    let positionArray = ["s", "m", "e"];
    let inputString = string;
    let word = "";
    let word2 = "";

    let lastIndex = stringArray.length - highlightWord
    let middleIndex = Math.floor(lastIndex / 2);


    if (position === "s") {
        for (let i = 0; i < highlightWord; i++) {
            word = word + " " + stringArray[i]
        }
    } else if (position === "m") {
        for (let i = middleIndex; i < (middleIndex + highlightWord); i++) {
            word = word + " " + stringArray[i]
        }

    } else if (position === "e") {
        for (let i = lastIndex; i < (lastIndex + highlightWord); i++) {
            word = word + " " + stringArray[i]
        }
    } else {
        word = ""
    }
    return highlightWords(inputString, word)
}

function highlightWords(inputString, word) {
    const highlightedString = inputString.replace(
        new RegExp(`(${word})`, 'gi'),
        '<span>$1</span>'
    );
    return highlightedString;
}

export const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const activeDashboardCss = (isActive) => {
    let mainBody = document.querySelector('body');
    console.log(mainBody)
    if (isActive) {
        mainBody.dataset.themeVersion = 'light';
        mainBody.dataset.layout = 'vertical';
        mainBody.dataset.navHeaderbg = 'color_1';
        mainBody.dataset.headerbg = 'color_1';
        mainBody.dataset.sidebarStyle = 'full';
        mainBody.dataset.sibebarbg = 'color_1';
        mainBody.dataset.idebarPosition = 'static';
        mainBody.dataset.headerPosition = 'static';
        mainBody.dataset.container = 'wide';
        mainBody.setAttribute('direction', 'ltr')
    } else {
        const dataList = [
            "theme-version", "layout", "nav-headerbg", "headerbg", "sidebar-style", "sibebarbg", "idebar-position", "header-position", "container"
        ]
        mainBody.removeAttribute("direction");
        dataList.map(item => {
            mainBody.removeAttribute(`data-${item}`);
        })
    }
}

export const truncateString = (str, n) => {
    return (str?.length > n) ? `${str.slice(0, n - 1)}...` : str;
}

export const ucFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const toStringTime = (str) => {
    let [hours, minutes] = str.split(':');
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let time12 = hours + ':' + minutes + ' ' + meridiem;
    return time12;
}

export const createInputFileUrl = (file) => {
    return window.URL.createObjectURL(file)
}

export const goToExternalLink = (path) => {
    window.open(path, '_blank');
}

export const goToInternalLink = (path) => {
    window.open(mainPath + path, '_blank');
}

export const useInternalLink = (path) => {
    return mainPath + path
}

export const isOdd = (number) => {
    return number % 2 === 1;
}

