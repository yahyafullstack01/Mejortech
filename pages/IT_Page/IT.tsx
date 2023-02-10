import Navbar from "../../Components/Navbar/navbar_it";
import Inro from "../../Components/Introduction/intro_it";
import Our_packages from "../../Components/our_packages/our_packages";
import Testamonials from "../../Components/Testamonials/testamonials";


export default function IT() {
    return (
        <div>
            <Navbar/>
            <Inro/>
            <Our_packages />
            <Testamonials />
        </div>
    )
}