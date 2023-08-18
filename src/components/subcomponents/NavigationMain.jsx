import { FaBars, FaHeart, FaRandom, FaShopify, FaUser } from "react-icons/fa";
import logoImg from "../../../public/logo.svg"
import CustomInput from "../CustomInput";
import { Link } from "react-router-dom";
import { closeMenu, openMenu } from "../../redux/actions";
import { connect } from "react-redux";

function NavigationMain({ openMenu, menuState, closeMenu }) {
    
    return (
        <div className="navigation_main">
            <div>
                <button
                    onClick={menuState ? closeMenu : openMenu}><FaBars /></button>
                <img src={logoImg} />
            </div>
            <CustomInput type="search" />
            <div className="flex-row-wrapper">
                <FaUser />
                <FaRandom />
                <FaHeart />
                <Link to="/">
                    <FaShopify />
                    $0.00
                </Link>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => dispatch(openMenu()),
        closeMenu: () => dispatch(closeMenu())
    }
}

const mapStateToProps = (state) => {
    return {
        menuState: state.menuState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMain)