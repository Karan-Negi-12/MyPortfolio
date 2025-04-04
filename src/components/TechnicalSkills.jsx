import React from 'react'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import html from '../Assets/html.png'
import Java from '../Assets/java.jpg'
import javascript from '../Assets/javascript.png'
import Python from '../Assets/python.jpg'
import reactImage from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'


const TechnicalSkills = () => {

    const techs = [

        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-sky-400"
        },
        {
            id:4,
            src:javascript,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:5,
            src:reactImage,
            title:"React",
            style:"shadow-blue-600"
        },
        {
            id:6,
            src:Java,
            title:"Java",
            style:"shadow-orange-200"
        },
        {
            id:7,
            src:Python,
            title:"Python",
            style:"shadow-blue-200"
        },
        {
            id:8,
            src:github,
            title:"GitHub",
            style:"shadow-orange-400"
        },
    ]





  return (
    <div name="technicalSkills" className='bg-gradient-to-b from-gray-800 to-black
        w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
            w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500
                    p-2 inline'>Technical Skills</p>
                <p className='py-6'>These are the technologies I have worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center 
                py-8 px-12 sm:px-0'>
                    {
                        techs.map(({id,src,title,style}) => (
                            <div 
                                key={id} 
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }




                
            </div>
        </div>
      
    </div>
  )
}

export default TechnicalSkills
