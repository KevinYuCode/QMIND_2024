import ContentContainer from "@/components/ContentContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database, Tables } from "../../database.types";
import TextInput from "@/components/Inputs/TextInput";


export default async function Account() {
    const supabase = createServerComponentClient<Database>({ cookies });

    const { data: { user } } = await supabase.auth.getUser();

    return (
        <ContentContainer>
            <div className="flex flex-col justify-start items-center gap-[30px] pb-[100px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="h1-styles">Account</h1>
                    {/* add log out button */}
                </div>

                <div className="flex flex-row justify-center gap-[20px] w-full">
                    <div className="flex justify-center items-center">
                        {user?.user_metadata.avatar_url ? 
                            <img src={user?.user_metadata.avatar_url} className="w-full h-full">
                            
                            </img>
                            :
                            <div className="relative">
                                <div className="absolute z-0 hover:z-20 hover:bg-white/40 text-transparent hover:text-black w-full h-full rounded-full flex justify-center items-center">
                                    upload a photo
                                </div>
                                <svg className="z-10" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-124.17 -124.17 496.69 496.69" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-124.17" y="-124.17" width="496.69" height="496.69" rx="248.345" fill="#c2c2c2" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.986792"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:'#ffffff'}} d="M9.954,241.305h228.441c3.051,0,5.896-1.246,7.805-3.416c1.659-1.882,2.393-4.27,2.078-6.723 c-5.357-41.734-31.019-76.511-66.15-95.053c-14.849,14.849-35.348,24.046-57.953,24.046s-43.105-9.197-57.953-24.046 C31.09,154.65,5.423,189.432,0.071,231.166c-0.315,2.453,0.424,4.846,2.078,6.723C4.058,240.059,6.903,241.305,9.954,241.305z"></path> <path style={{fill:'#ffffff'}} d="M72.699,127.09c1.333,1.398,2.725,2.73,4.166,4.019c12.586,11.259,29.137,18.166,47.309,18.166 s34.723-6.913,47.309-18.166c1.441-1.289,2.834-2.622,4.166-4.019c1.327-1.398,2.622-2.828,3.84-4.329 c9.861-12.211,15.8-27.717,15.8-44.6c0-39.216-31.906-71.116-71.116-71.116S53.059,38.95,53.059,78.16 c0,16.883,5.939,32.39,15.8,44.6C70.072,124.262,71.366,125.687,72.699,127.09z"></path> </g> </g> </g></svg>  
                            </div>
                        }
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div>
                            <label>First Name:</label>
                            <TextInput placeholder={user?.user_metadata.first_name} readonly={true}>
                            </TextInput>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <TextInput placeholder={user?.user_metadata.last_name} readonly={true}>
                            </TextInput>
                        </div>
                    </div>
                </div>
            </div>
        </ContentContainer>
    );
}