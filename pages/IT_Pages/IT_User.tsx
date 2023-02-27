import Navbar from "../../Components/IT-comp/Navbar_IT/navbar_it";
import Intro from "../../Components/IT-comp/Introduction_IT/intro_it";
import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";

export default function IT_User() {
    return (
        <>
            <Navbar />
            <Intro />
        </>
    )
} 