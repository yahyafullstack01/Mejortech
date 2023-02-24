import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
import { useState } from "react";




export default function Form() {
    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns, SectionContact, SignUpSection, LogInSection,FormContainer } = useContext(AppContext);
    
    
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

