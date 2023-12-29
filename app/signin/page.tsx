"use client";

import { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../database.types";

import Button from "@/components/Buttons/Button";
import DefaultModal from "../components/Modals/DefaultModal";
import TextInput from "../components/Inputs/TextInput";
import SignUpModal from "../signup/page";

export default function SignInPage() {
    const router = useRouter();
    const supabase = createClientComponentClient<Database>();

    const [ showSignUp, setShowSignUp ] = useState(false)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSignIn = async () => {
        console.log(email, password)
        await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        router.push('/projects');
      }

    return (
        <div className="flex justify-center py-[40px]">
            <div className="w-[35%] flex flex-col justify-center items-center gap-[20px] bg-[#161616] px-[30px] py-[30px] border-[1px] border-white/20 rounded-[10px]">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="h2-styles">Sign In</h1>
                    {/* <div className="cursor-pointer">
                        <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                    </div> */}
                </div>
                <form className="flex flex-col justify-around items-start w-full" onSubmit={handleSignIn}>

                    <label>Email</label>
                    <TextInput id="email" required={true} value={email || ''} onChange={(event:any) => {setEmail(event.target.value)}}/>

                    <label>Password</label>
                    <TextInput id="password" password={true} required={true} value={password || ''} onChange={(event:any) => {setPassword(event.target.value)}}/>

                    <div className="pt-[20px] flex flex-row w-full justify-between items-center">
                        <Button label='Sign Up' style='border-[1px] border-white' textColor='text-white' type='button'
                                onClick={() => {setShowSignUp(true)}}></Button>
                        <Button label='Sign In' style='bg-[#F7F7F7]' type='button' onClick={handleSignIn}></Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
