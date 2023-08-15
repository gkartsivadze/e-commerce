import logoImg from "../../public/logo.svg"
import SocialMediaList from "./subcomponents/SocialMediaList"

export default function Footer() {
    return (
        <footer>
            <div className="contact_info">
                <img src={logoImg} />
                <div className="flex-column-wrapper">
                    <h4>Headquarters</h4>
                    <p>Presei Square No45, Bucharest - 099455</p>
                    <h4>Email</h4>
                    <p>contact@shoperz.com</p>
                    <h4>Telephone</h4>
                    <p>(+40) 987 123 654</p>
                    <SocialMediaList />
                </div>
            </div>
            <ul>
                <li>Categories</li>
                <li>TV & Audio</li>
                <li>Smartphones</li>
                <li>Laptops & PCs</li>
                <li>Gadgets</li>
                <li>Photo & Video</li>
                <li>Gifts</li>
                <li>Books</li>
                <li>Toys</li>
            </ul>
            <ul>
                <li>Useful Links</li>
                <li>About</li>
                <li>Contact</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Policy</li>
                <li>Cookie Policy</li>
            </ul>
            <ul>
                <li>Customer Service</li>
                <li>My Account</li>
                <li>My Cart</li>
                <li>Track Order</li>
                <li>Returns & Exchanges</li>
                <li>Repair Services</li>
                <li>Support</li>
            </ul>
        </footer>
    )
};
