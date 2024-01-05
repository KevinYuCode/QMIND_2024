import ContentContainer from "@/components/ContentContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import SignOutButton from "./signout";
import SignInButton from "./signin";

export default async function Projects({ props }: any) {
    const supabase = createServerComponentClient({ cookies });

    const { data: projects } = await supabase.from('Projects').select('*')
    const { data: user, error: userError } = await supabase.auth.getUser()
    const { data: session, error: sessionError } = await supabase.auth.getSession()

    // async function logOut() {
    //     await supabase.auth.signOut();
    // }

    return (
        <ContentContainer>
            <div className="flex flex-col justify-center items-center gap-[30px] px-[20px]">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="h1-styles">Projects</h1>
                    <div className="flex flex-row items-center gap-[30px]">
                        {session.session ? 
                        <SignOutButton/>
                        :
                        <SignInButton/>
                        }
                        <Link href={'/account'}>
                            <svg height='60px' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-7.74 -7.74 61.01 61.01" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path> </g> </g></svg>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-row gap-[20px]">
                    {/* <button className="w-[140px] text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic"
                            onClick={() => setShowSignIn(true)}
                    >
                        Sign In
                    </button>
                    <button className="w-[140px] text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic"
                            onClick={() => setShowSignUp(true)}
                    >
                        Sign Up
                    </button>
                    <button className="w-[140px] text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic"
                            onClick={ logOut }
                    >
                        Log Out
                    </button> */}
                </div>
                <pre>{JSON.stringify(projects, null, 2)}</pre>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </ContentContainer>
    );
}
