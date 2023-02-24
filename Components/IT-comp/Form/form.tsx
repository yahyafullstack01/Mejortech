import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function Form() {
    const { FormContainer } = useContext(AppContext);
    
    
    return (
        <div className={styles.container} id="FormDiv">
            {/* The Contact Section */}
            {FormContainer}

            {/*The sign up section
 
        
           //The Log In section 
            <LogInSection/>*/}

        </div>
    )
}

