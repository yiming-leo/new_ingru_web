"use client"
import { useEffect, useState } from "react";


const HomeTitle = () => {
    const [textTitle, setTextTitle] = useState('stable-diffusion')
    const texts = ['stable-diffusion', 'sd-comfyui', '隐入智能体'];
    const [textId, setTextId] = useState(0);
    const [opacity, setOpacity] = useState(1);



    useEffect(() => {
        const interval = setInterval(() => {

            setTextId((textId + 1) % texts.length);
            setTextTitle(texts[textId])
            setOpacity(1)
        }, 2000);

        return () => clearInterval(interval);
    }, [textId])


    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0)
        }, 1500);
        return () => clearInterval(interval);
    }, [textId])




    return (
        <div style={{


        }} className="  relative   text-center  leading-10   h-10 text-2xl font-semibold text-white rounded ">
            <div style={{
                transition: "all 0.5s",
                opacity: opacity,
                color: '#4183FF'
            }}> {textTitle}</div>
        </div>
    )
}

export default HomeTitle