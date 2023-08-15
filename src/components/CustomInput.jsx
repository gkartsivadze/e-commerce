import { useRef } from "react";
import { FaEyeSlash, FaSearch, FaTelegramPlane } from "react-icons/fa"

export default function CustomInput({ type }) {
    const inputRef = useRef();

    let placeHolder, icon, buttonStyle;

    if(type == "search") {
        placeHolder = "Search for products";
        icon = <FaSearch />;
    } else if(type == "email") {
        placeHolder = "Enter your email address";
        icon = <FaTelegramPlane />
    } else if(type == "subscribe") {
        placeHolder = "Enter your email address";
        icon = "Subscribe";
    } else if(type == "password") {
        placeHolder = "Type password";
        icon = <FaEyeSlash />
        buttonStyle = {
            backgroundColor: "transparent",
            color: "black"
        }
    }

    return (
        <div className="custom_input_wrapper">
            <input ref={inputRef} placeholder={placeHolder} type={type == "password" ? "password" : "text"} />
            {
                type == "search" && <select name="category"><option value="">All Categories</option></select>
            }
            <button style={buttonStyle}>{ icon }</button>
        </div>
    )
};
