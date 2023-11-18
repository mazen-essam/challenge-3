import React from "react";
import { useState, useRef } from "react";
import Dialog from "./Dialog";

export default function Form() {
   const dialog = useRef();
   const [textInput1, setTextInput1] = useState("");
   const [textInput2, setTextInput2] = useState("");
   const [emailInput, setEmailInput] = useState("");
   const [passwordInput, setPasswordInput] = useState("");
   const [close, setClose] = useState(true);

   const handleTextInput1Change = (e) => {
      setTextInput1(e.target.value);
   };

   const handleTextInput2Change = (e) => {
      setTextInput2(e.target.value);
   };

   const handleEmailInputChange = (e) => {
      setEmailInput(e.target.value);
   };
   const handlePasswordInputChange = (e) => {
      setPasswordInput(e.target.value);
   };
   const HandleSubmit = (e) => {
      e.preventDefault();
      dialog.current.open();
      setPasswordInput("");
      setTextInput2("");
      setEmailInput("");
   };
   const HandleClose = () => {
      setClose(true);
   };

   return (
      <>
         <div className="free text-center  py-3 px-4 bg-accent-blue mb-6 mt-4 sm:mt-0  rounded-lg">
            <p className="text-white">
               <span className="font-bold">Try it free 7 days </span>then
               20$/mo. thereafter
            </p>
         </div>
         {close ? (
            <Dialog
               ref={dialog}
               name={textInput1}
               close={HandleClose}
               submit={close}
            />
         ) : (
            ""
         )}
         <form
            action=""
            className="bg-white flex flex-col  justify-center p-11 rounded-lg"
            onSubmit={HandleSubmit}
         >
            <input
               type="text"
               className="px-4 py-2 placeholder:text-slate-500 border-gray-300 border-2 rounded-lg"
               placeholder="First Name"
               value={textInput1}
               onChange={handleTextInput1Change}
            />
            <input
               type="text"
               className="px-4 py-2 placeholder:text-slate-500 mt-6 border-gray-300 border-2 rounded-lg"
               placeholder="Last Name"
               value={textInput2}
               onChange={handleTextInput2Change}
            />
            <input
               type="email"
               className="px-4 py-2 placeholder:text-slate-500 mt-6 border-gray-300 border-2 rounded-lg"
               placeholder="Email"
               value={emailInput}
               onChange={handleEmailInputChange}
            />
            <input
               type="password"
               placeholder="Password"
               className="px-4 py-2 placeholder:text-slate-500 mt-6 border-gray-300 border-2 rounded-lg"
               value={passwordInput}
               onChange={handlePasswordInputChange}
            />
            <button
               type="submit"
               className="text-xs text-white font-semibold uppercase mt-6 px-6 py-3 bg-primary-green rounded-lg"
            >
               claim your free trial
            </button>
         </form>
      </>
   );
}
