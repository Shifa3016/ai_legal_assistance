// "use client";
// import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Button2 from "../components/Button2";

export default function SignupPage() {
  // const containerRef = useRef(null);
  // const registerBtnRef = useRef(null);
  // const loginBtnRef = useRef(null);

  // const handleRegisterClick = () => {
  //   console.log("active");
  //   containerRef.current?.classList.add("active");
  // };

  // const handleLoginClick = () => {
  //   containerRef.current?.classList.remove("active");
  // };

  // useEffect(() => {
  //   const registerBtn = registerBtnRef.current;
  //   const loginBtn = loginBtnRef.current;

  //   registerBtn?.addEventListener("click", handleRegisterClick);
  //   loginBtn?.addEventListener("click", handleLoginClick);

  //   return () => {
  //     registerBtn?.removeEventListener("click", handleRegisterClick);
  //     loginBtn?.removeEventListener("click", handleLoginClick);
  //   };
  // }, []);

  return (
    <div>
      <div
        className="flex bg-white text-black justify-center w-[60%] mx-auto h-[85vh] rounded-[40px]"
      >
        <div className="left-signup bg-[#f0c040] w-[50%] flex flex-col items-center justify-center text-center rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[150px] rounded-br-[150px] px-[100px]">
          <h1 className="text-[40px] font-bold">Welcome Back!</h1>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vitae obcaecati
          </p>
          <div>
            <Link href="/signin"><button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
            >SIGN IN
            </button></Link>
          </div>
        </div>
        <div className="right-signup w-[50%] flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-3xl">Create Account</h2>
          <div className="form-container sign-up flex flex-col justify-center px-[48px]  items-center">
            <form action="connect.php" method="post">
              <input className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" type="email" placeholder="Enter Email" />
              <input className="my-2 bg-[#eee] py-[10px] px-[15px] border-none mb-[20px]" type="password" placeholder="Enter Password" />
              <button className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
              >SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}




// 'use client';

// import { useEffect } from 'react';
// import './login.css'; // Assuming you moved login.css here

// export default function SignupPage() {
//   useEffect(() => {
//     const container = document.getElementById('container');
//     const registerBtn = document.getElementById('register');
//     const loginBtn = document.getElementById('login');

//     registerBtn?.addEventListener('click', () => {
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener('click', () => {
//       container.classList.remove("active");
//     });

//     // Cleanup
//     return () => {
//       registerBtn?.removeEventListener('click', () => {});
//       loginBtn?.removeEventListener('click', () => {});
//     };
//   }, []);

//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-up">
//         <form action="connect.php" method="post">
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#"><i className="fa-brands fa-google"></i></a>
//             <a href="#"><i className="fa-brands fa-github"></i></a>
//             <a href="#"><i className="fa-brands fa-linkedin"></i></a>
//             <a href="#"><i className="fa-brands fa-facebook"></i></a>
//           </div>
//           <span>or create account using email</span>
//           <input type="email" placeholder="Enter Email" />
//           <input type="password" placeholder="Enter Password" />
//           <button>Sign Up</button>
//         </form>
//       </div>

//       <div className="form-container sign-in">
//         <form>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#"><i className="fa-brands fa-google"></i></a>
//             <a href="#"><i className="fa-brands fa-github"></i></a>
//             <a href="#"><i className="fa-brands fa-linkedin"></i></a>
//             <a href="#"><i className="fa-brands fa-facebook"></i></a>
//           </div>
//           <span>or sign in using email</span>
//           <input type="email" placeholder="Enter Email" />
//           <input type="password" placeholder="Enter Password" />
//           <a href="#">Forgot Password</a>
//           <button>Sign In</button>
//         </form>
//       </div>

//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae obcaecati</p>
//             <button className="hidden" id="login">Sign In</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello Friend!</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae obcaecati</p>
//             <button className="hidden" id="register">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// 'use client';
// import { useRef } from 'react';

// export default function Signup() {
//   const containerRef = useRef(null);

//   const handleSignUpClick = () => {
//     containerRef.current.classList.add("right-panel-active");
//   };

//   const handleSignInClick = () => {
//     containerRef.current.classList.remove("right-panel-active");
//   };

//   return (
//     <div className="h-[85vh] w-screen flex justify-center items-center">
//       <div
//         id="container"
//         ref={containerRef}
//         className="container bg-white w-[900px] max-w-full min-h-[500px] shadow-lg relative overflow-hidden rounded-3xl transition-all duration-500"
//       >
//         {/* Sign Up Form */}
//         <div className="form-container sign-up-container absolute top-0 left-0 w-1/2 h-full flex items-center justify-center px-12 transition-all duration-500">
//           <form className="bg-white text-black h-full flex flex-col justify-center items-center px-10 text-center">
//             <h1 className="text-3xl font-bold mb-4">Create Account</h1>
//             <input className="bg-gray-200 my-2 px-4 py-2 w-full text-sm outline-none" type="text" placeholder="Enter Name" />
//             <input className="bg-gray-200 my-2 px-4 py-2 w-full text-sm outline-none" type="email" placeholder="Enter Email" />
//             <input className="bg-gray-200 my-2 px-4 py-2 w-full text-sm outline-none" type="password" placeholder="Enter Password" />
//             <button className="bg-[#f0c040] px-8 py-3 mt-4 rounded-lg font-bold uppercase">
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div className="form-container sign-in-container absolute top-0 right-0 w-1/2 h-full flex items-center justify-center px-12 transition-all duration-500">
//           <form className="bg-white h-full flex flex-col justify-center items-center px-10 text-center">
//             <h1 className="text-3xl font-bold mb-4">Sign in</h1>
//             <input className="bg-gray-200 my-2 px-4 py-2 w-full text-sm outline-none" type="email" placeholder="Email" />
//             <input className="bg-gray-200 my-2 px-4 py-2 w-full text-sm outline-none" type="password" placeholder="Password" />
//             <a href="#" className="text-purple-700 text-sm my-2">Forgot your password?</a>
//             <button className="bg-purple-700 text-white px-8 py-3 mt-2 rounded-lg font-bold uppercase">
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Overlay */}
//         <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500">
//           <div className="overlay bg-gradient-to-r from-purple-500 to-pink-500 text-white w-[200%] h-full relative left-[-100%] flex items-center justify-center transition-all duration-500">
//             <div className="overlay-panel overlay-left absolute left-0 w-1/2 h-full flex flex-col items-center justify-center px-12 text-center transition-all duration-500">
//               <h1 className="text-3xl font-bold">Welcome Back!</h1>
//               <p className="text-sm my-4">To keep connected with us please login with your personal info</p>
//               <button
//                 className="bg-transparent border border-white px-6 py-2 mt-2 rounded-lg font-bold text-white uppercase"
//                 onClick={handleSignUpClick}
//               >
//                 Sign In
//               </button>
//             </div>

//             <div className="overlay-panel overlay-right absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-12 text-center transition-all duration-500">
//               <h1 className="text-3xl font-bold">Hello, Friend!</h1>
//               <p className="text-sm my-4">Enter your personal details and start your journey with us</p>
//               <button
//                 className="bg-transparent border border-white px-6 py-2 mt-2 rounded-lg font-bold text-white uppercase"
//                 onClick={handleSignInClick}
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toggle classes with Tailwind */}
//       <style jsx>{`
//         .right-panel-active .sign-in-container {
//           transform: translateX(100%);
//         }
//         .right-panel-active .sign-up-container {
//           transform: translateX(100%);
//           opacity: 1;
//           z-index: 5;
//         }
//         .right-panel-active .overlay-container {
//           transform: translateX(-100%);
//         }
//         .sign-up-container,
//         .sign-in-container {
//           transition: all 0.6s ease-in-out;
//         }
//         .overlay-container {
//           transition: transform 0.6s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }


