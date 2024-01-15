
interface TextArea {
    info: string;
}

const TextArea: React.FC<TextArea> = ({ info }) => {
    return (
        <div className='pr-3'>
            <p className='flex text-[18px] font-mono max-w-[470px] hover:font-serif'>{info}</p>
        </div>
    )
}

export default TextArea