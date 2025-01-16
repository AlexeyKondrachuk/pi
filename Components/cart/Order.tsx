import React from 'react'
import '../../styles/main/order.scss'

export const Order = () => {
  return (

    <div className='order-container'>
        
        <div className='order-header'>
            <div className='order-title-header'>
        <h3>
        Заказ № 00-01  
         </h3>  
         <span>Дата и вермя заказа 10.10.2025</span>
         </div>

       

         <div className='order-btn-wrapper'>

            <div>
         <button>
         <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/>
         </svg>
            Отменить</button>
            </div>

            <div>
         <button>
         <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" clipRule="evenodd" d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" fill="#000000"/>
         </svg>
            Редактировать</button>
            </div>

         </div>

        
         </div>


         <span className='line'></span>

         <div className='order-main'>

                


                <div className='order-status_task'>
                <span>Предмет Математика</span>
                <span>Задание</span>
                </div>
                
                <div className='price-task'>
                 <span>Стоимость </span>
                 <span>199 Р</span>
                </div>

                <div className='deadline-task'>
                 <span>Дата и время выполнения работы</span>
                 <span>12.12.2025 19 00</span>
                </div>

                <div className='order_status'>
                <h4>Статус</h4>
                <span>Ожидает оплаты</span>
                </div>
                
              
               

               </div>
    </div>

  )
}
