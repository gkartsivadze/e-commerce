import NavigationTop from "./subcomponents/NavigationTop";
import NavigationMain from "./subcomponents/NavigationMain";
import NavigationBottom from "./subcomponents/NavigationBottom";

export default function Navigation() {
    return (
        <nav>
            <NavigationTop />
            <NavigationMain />
            <NavigationBottom />
        </nav>
    )
};
