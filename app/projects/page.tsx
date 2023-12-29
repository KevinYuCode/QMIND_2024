import { useEffect, useState } from "react";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Projects({ props }: any) {
    const supabase = createServerComponentClient({ cookies });

    const { data: projects } = await supabase.from('Projects').select('*')
    const { data: user, error: userError } = await supabase.auth.getUser()

    // async function logOut() {
    //     await supabase.auth.signOut();
    // }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-[30px]">
                <h1 className="h1-styles">Projects</h1>
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
        </>
    );
}
