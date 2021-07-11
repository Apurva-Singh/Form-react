import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import {Transition, Dialog} from '@headlessui/react';

interface Props {}

const Nav:React.FC<Props>=(props)=> {
  const[isMenuOpen, setIsMenuOpen]= useState(false);
  const[isAnimating, setIsAnimating]= useState(false);
  return (
    <>
    <div className="relative flex z-30 justify-between px-4 py-2 bg-white shadow-md ">
    <svg width="50" height="50">
   <circle cx="25" cy="25" r="20" stroke="green" stroke-width="4" fill="black" />
   Sorry, your browser does not support inline SVG.
</svg> 
 
     
      <svg
      onClick={isAnimating ? undefined : () => setIsMenuOpen(true)}
        
      
        className="w-6 h-6"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path>
        <path d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path>
        <path d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path>
        <circle fill="transparent" cx="50%" cy="50%" r="75%"></circle>
      </svg>
    </div>
<Transition.Root show={isMenuOpen} as={Fragment}
beforeLeave={()=> setIsAnimating(true)}
afterLeave={()=> setIsAnimating(false)}
> 
    <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
      <Transition.Child as={Fragment}
      enter="ease-in-out transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-50"
      entered="opacity-50"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-50"
      leaveTo="opacity-0"
        >
    <Dialog.Overlay className="fixed inset-0 z-10 bg-black  "></Dialog.Overlay>
    </Transition.Child>

    <Transition.Child as={Fragment}
      enter=" transition-transform duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"> 
    
    <div className="fixed flex flex-col items-start top-0 bottom-0 right-0 transform z-20 w-80 p-5 pt-40 bg-white"  >
    <button>Menu</button>
      <button>About us</button>
  
      </div>
  </Transition.Child>
  </Dialog>
 
  </Transition.Root>
    </>
  );
};

export default React.memo(Nav);
