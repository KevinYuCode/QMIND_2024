"use client";

import { useState } from "react";

import SignInModal from "@/components/Modals/SignInModal";

export default function SignInButton() {
    const [ showSignIn, setShowSignIn ] = useState(false);

    return (
        <>
            {showSignIn ? <SignInModal closeFunction={() => setShowSignIn(false)}></SignInModal> : <></>}
            <button className="w-[120px] h-[40px] text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic"
                onClick={() => {setShowSignIn(true);} }>
                Log In
            </button>
        </>
    );
}
