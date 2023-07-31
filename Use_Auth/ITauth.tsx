import { useState } from "react";
import { useRouter } from "next/router";
import { app, dataBase } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"



export const useAuth = () => {
    const router = useRouter();
    
    // signUp with google (firebase)
    const auth = getAuth(app);
    const Googlesign = new GoogleAuthProvider();
    const SignUpwithgoogle = () => {
        signInWithPopup(auth, Googlesign)
            .then((response: any) => {
                alert("yes" + response.user);
                sessionStorage.setItem('Token', response.user.accessToken);
                router.push('/IT_Pages/IT_User');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // for Adding Data in the Firestore
    const dataRef = collection(dataBase, 'CRUD data');
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [UserLanguage, setUserLanguage] = useState<string[]>([]);
    const [Source, setSource] = useState('');
    const [UserPackage, setUserPackage] = useState('');
    const valueUserName = (e: any) => { setUserName(e.target.value) };
    const valueSource = (e: any) => { setSource(e.target.value) };
    const valueUserPackage = (e: any) => { setUserPackage(e.target.value) };
    const valueEmail = (e: any) => { setEmail(e.target.value) }
    const valuePassword = (e: any) => { setPassword(e.target.value) }

    const valueUserLanguage = (e: any) => {
        const language = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setUserLanguage((prevLanguages) => [...prevLanguages, language]);
        } else {
            setUserLanguage((prevLanguages) =>
                prevLanguages.filter((prevLanguage) => prevLanguage !== language)
            );
        }
    };

    const Adddata = () => {
        addDoc(dataRef, {
            name: UserName,
            userEmail: email,
            userPassword: password,
            preferedLanguage: UserLanguage,
            userSource: Source,
            Package: UserPackage,
        })
            .then(() => {
                alert("data sent");
                setUserName('');
                setEmail('');
                setPassword('');
                setUserLanguage([]);
                setSource('');
                setUserPackage('');
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // signUp with email and password
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((response: any) => {
                alert("yes" + response.user);
                Adddata();
                sessionStorage.setItem('Token', response.user.accessToken);
                router.push('/IT_Pages/IT_User');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // log out function firebase ItuserPage
    const Logout = () => {
        let remove = sessionStorage.removeItem('Token')
        console.log('remove');
        router.push('/IT_Pages/IT');
    }

    return {
        SignUpwithgoogle,
        signUp,
        valueEmail,
        valuePassword,
        valueSource,
        valueUserName,
        valueUserLanguage,
        valueUserPackage,
        email,
        password,
        UserLanguage,
        UserName,
        UserPackage,
        Source,
        Logout,
    }
}


