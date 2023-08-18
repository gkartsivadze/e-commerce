import { createStore } from "redux";

const sideBarReducer = (state = { menuState: false }, action) => {
    switch(action.type) {
        case "OPEN":
            return {
                menuState: true
            };
        case "CLOSE":
            return {
                menuState: false
            }
        default:
            return {
                menuState: state.menuState
            }
    }
}

const store = createStore(sideBarReducer);

export default store;