

export default function DefaultModal({ children }: any) {
    return (
        <div className="absolute z-10 top-0 left-0 h-full w-full backdrop-blur-sm">
            <div className="absolute z-20 w-[35%] h-fit bg-[#161616] px-[30px] py-[30px] border-[1px] border-white/20 rounded-[10px]
                            right-0 left-0 mr-auto ml-auto
                            top-0 bottom-0 mt-auto mb-auto
                            flex flex-col justify-start items-center gap-[20px]">
                { children }
            </div>
        </div>
    );
}