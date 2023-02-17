import Navbar from "../../Components/Navbar/navbar_it";
import Intro from "../../Components/Introduction/intro_it";
import Why_Us from "../../Components/Why_us/why_us";
import Our_packages from "../../Components/our_packages/our_packages";
import Testamonials from "../../Components/Testamonials/testamonials";


export default function IT() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Why_Us />
            <Our_packages />
            <Testamonials />
        </div>
    )
}