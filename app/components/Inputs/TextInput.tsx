

export default function TextInput({ password, required, id, value, onChange, placeholder, readonly }: any) {
    return (
        <input className='my-[10px] px-[10px] h-[35px] bg-transparent rounded-[5px] border-[1px] border-white/40 w-full' 
                type={password ? 'password':'text'} 
                id={id}
                required = {required}
                value = { value }
                onChange = { onChange }
                placeholder = { placeholder }
                readOnly = { readonly }
                >
        </input>
    );
}