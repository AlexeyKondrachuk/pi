'use client'
import React from 'react'
import '../../../styles/main/about_us.scss'
import { useRouter } from 'next/navigation';

export const Aboutus = () => {
  const router = useRouter();

  const navigateToAboutUs = () => {
    router.push('/aboutus'); // Укажите путь к странице aboutus
  };


  return (
    <div className='about_us-container'>
    
   

    <div className='about_us-header'>
    <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" >
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
    <h2>
      Информация о сервисе.
     </h2>
   
    </div>
    <span className='line'></span>
    <p className='about_us-title'>Наш сервис предназначен для студентов,
         школьников и всех, кто сталкивается с 
         решением задач по математике и физике. Мы
          объединяем опыт профессионалов, современные 
          технологии и удобный интерфейс, чтобы помочь 
          вам в учебе, подготовке к экзаменам и решении
           сложных задач. 
         
           </p>
           <span className='line'></span>
           
           <div className='btn-container' onClick={navigateToAboutUs}>
             <span>Подробнее...</span>
             <button>➤</button>
           </div>
          
           </div>
  )

}
