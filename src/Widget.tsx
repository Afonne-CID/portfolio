import React from 'react'


interface WidgetProps {
    img: string;
    info: string;
    link: string;
}

const Widget: React.FC<WidgetProps> = ({ img, info, link }) => {

    const handleWidgetClick = () => [
        window.open(link, '_blank')
    ]

    return (
        <div
            className='
                flex
                flex-col
                mb-2
                rounded-full
                bg-[#dce3de]
                md:w-[270px]
                w-[80%]
                h-[100px]
                justify-center
                items-center
            '
            onClick={handleWidgetClick}
        >
           <img 
                className='mb-2 w-[30px] h-[30px]' 
                src={img} 
                alt={info} 
            />
            <p className='text-[13px] font-mono font-bold'>{info} <span className='text-[#3db36c]'>↗</span></p>
        </div>
    )
}

export default Widget