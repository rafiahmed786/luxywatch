import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile,onAuthStateChanged    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = ()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isAdmin,setIsAdmin]=useState(false);
    const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();

    

    const signInUsingGoogle = (location,history)=>{
        setIsLoading(true);
        const googleProvider= new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            saveUser(result.user.email,result.user.displayName,"PUT")
            const redirect_uri= location?.state?.from || '/home';
            history.replace(redirect_uri)
        })
        .catch(error=>setError(error.message))
        .finally(()=>setIsLoading(false))
    }

    const setUserName=(name)=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
    }

    const registerUsingEmailAndPassword=(name,email,pass,history)=>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,pass)
        .then(result=>{
            // const user=result.user;
            setUserName(name);
            const newUser= {email,displayName:name}
            setUser(newUser);
            saveUser(email,name,"POST")
            history.replace('/')
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

        useEffect(()=>{
                onAuthStateChanged(auth,user=>{
                    if(user){
                        setUser(user)
                    }
                    setIsLoading(false)
                })
            },[])

    const signInUsingEmailAndPassword=(email,pass,location,history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,pass)
        .then(result=>{
            const user = result.user;
            const redirect_uri= location?.state?.from || '/home';
            history.replace(redirect_uri)
            setUser(user)
        })
        .catch(error=>setError(error.message))
        .finally(()=>setIsLoading(false))
        
    }

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }

    const saveUser=(email,displayName,method)=>{
        const user= {email,displayName};
        fetch("https://young-cove-63019.herokuapp.com/users",{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>console.log(res))
    }

    useEffect(()=>{
        const url = `https://young-cove-63019.herokuapp.com/users/${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setIsAdmin(data.admin))
    },[user.email])

    return {
        user,
        isAdmin,
        error,
        setError,
        signInUsingGoogle,
        registerUsingEmailAndPassword,
        signInUsingEmailAndPassword,
        logOut,
        isLoading
    }

}
export default useFirebase;