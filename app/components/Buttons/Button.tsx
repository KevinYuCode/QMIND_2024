

export default function Button({ label, style, type, textColor, onClick }: any) {
    return (
        <button className={`${style} w-[140px] text-center rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic`}
                onClick={onClick}
                type={type}>
            <div className={`${textColor}`}>{label}</div>
        </button>
    );
}