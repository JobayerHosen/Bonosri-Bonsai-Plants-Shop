import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");

  const auth = getAuth();

  //   GOOGLE SIGN IN
  const signInWithGoogle = () => {
    setIsLoading(true);
    const gAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  //   EMAIN AND PASSWORD SIGN UP
  const createAccountWithEmailPassword = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setUserProfile(auth, name);
        saveUser(user.uid, email, name, "POST");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(setIsLoading(false));
  };

  // SET USER PROFILE
  const setUserProfile = (auth, name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      })
      .finally(setIsLoading(false));
  };

  //   EMAIN AND PASSWORD LOGIN
  const logInWithEmailandPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(setIsLoading(false));
  };

  const saveUser = (uid, email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //   LOG OUT
  const logOut = () => {
    signOut(auth).then(setUser(null));
  };

  //   GET CURRENT USER WITH AUTH OBSERVER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
        // ...
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    setError,
    token,
    isLoading,
    signInWithGoogle,
    createAccountWithEmailPassword,
    logInWithEmailandPassword,
    logOut,
  };
};

export default useFirebase;
