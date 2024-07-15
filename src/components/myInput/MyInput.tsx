import './myInput.css'

interface IMyInputProps {
    name?: string
    type?: 'text' | 'email' | 'password'
    label?: string
    placeholder?: string

}

export default function MyInput({label='default', type, name='input', placeholder='default'}: IMyInputProps) {
    return (
        <>

        <label className='label'>{label}</label>
        <input type={type} name={name} placeholder={placeholder}/>

        </>

    );
}