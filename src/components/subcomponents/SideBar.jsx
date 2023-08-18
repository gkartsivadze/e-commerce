import React from "react"
import { connect } from "react-redux"
import { closeMenu } from "../../redux/actions.jsx"
import logoImg from "../../../public/logo.svg"
import { FaTimes } from "react-icons/fa"
import CollapsableItems from "./CollapsableItems.jsx"

import { categories } from "../../data.json"

function SideBar({ menuState, closeMenuDispatch }) {
    
    return (
        <aside id="side_menu" className={menuState ? "open" : ""}>
            <div className="flex-row-wrapper">
                <img src={logoImg} alt="Logo" />
                <button onClick={closeMenuDispatch}><FaTimes style={{ fontSize: "2rem", strokeWidth: '2px' }} /></button>
            </div>
            <CollapsableItems categories={categories} />
        </aside>
    )
};

const mapStateToProps = (state) => {
    return {
        menuState: state.menuState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeMenuDispatch: () => dispatch(closeMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)