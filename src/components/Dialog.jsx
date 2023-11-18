import React, { useImperativeHandle } from "react";
import { forwardRef, useRef } from "react";

const Dialog = forwardRef(function Dialog({ submit, close, name }, ref) {
   const item = useRef();
   useImperativeHandle(ref, () => {
      return {
         open() {
            item.current.showModal();
         },
      };
   });
   const CloseHandle = () => {
      //   e.prventDefault();
      close();
   };
   return (
      <>
         <dialog
            ref={item}
            className="bg-white px-6 py-6"
            onClose={CloseHandle}
         >
            <h1>Welcome {name}</h1>
            <form method="dialog" onSubmit={CloseHandle} className="noshadow">
               <button
                  type="submit"
                  className="noshadow text-xs text-white font-semibold uppercase mt-6 px-6 py-3 bg-primary-green rounded-lg"
               >
                  claim your free trial
               </button>
            </form>
         </dialog>
      </>
   );
});
export default Dialog;
