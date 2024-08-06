// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { LOGO } from "../utils/constants";
// import { auth } from "../utils/firebase";
// import { addUser, removeUser } from "../utils/userSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((store) => store.user);
//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {})
//       .catch((error) => {
//         navigate("/error");
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName, photoURL } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//             photoURL: photoURL,
//           })
//         );
//         navigate("/browse");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });
//     return () => unsubscribe();
//   }, []);

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import userImg from '../assets/user.jpg';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged user:", user); // Log user data
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    console.log("Redux user state:", user); // Log Redux user state
  }, [user]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={userImg}
          />
          <button onClick={handleSignOut} className="w-8 h-8 rounded-md ml-6">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;



//   return (
//     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
//       <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
//       {user && (
//         <div className="flex p-2 justify-between">
//           <img
//             className="hidden md:block w-12 h-12"
//             alt="usericon"
//             src={user?.photoURL}
//           />
//           <button onClick={handleSignOut} className="w-8 h-8 rounded-md ml-6">
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Header;