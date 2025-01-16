import React, { useCallback, useRef, useState } from 'react'
import '../../styles/admin/users.scss'

interface UserProps  {
  id: number;
  email: string;
}

interface TooltipState {
  message: string;
  x: number;
  y: number;
}

export const User: React.FC<UserProps> = ({id, email}) => {

const [isLock, setIsLock] = useState<boolean>(false)
const [tooltip, setTooltip] = useState<TooltipState | null>(null);


const handlerLock = () => {
  setIsLock(!isLock)
}

const deleteButtonRef = useRef<HTMLButtonElement | null>(null);
const editButtonRef = useRef<HTMLButtonElement | null>(null);
const lockButtonRef = useRef<HTMLButtonElement | null>(null);


const handleMouseEnter = useCallback(
  (message: string, buttonRef: React.RefObject<HTMLButtonElement | null>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect(); // Получаем координаты кнопки
      setTooltip({
        message,
        x: rect.left + rect.width / 2, // Позиционируем по центру кнопки
        y: rect.top - 10, // Позиционируем чуть выше кнопки
      });
    }
   
  },
  []
);

const handleMouseLeave = () => {
  setTooltip(null); // Скрываем подсказку
 
};

  return (
    <div className='user-container'>
        
      
        
        <div className='user-id'> 
         {id}
        </div>

        <div className='user-email'>
          {email}
        </div>

        <div className='user-role'>
         Клиент
        </div>

        <div className='user-delete'
          
          
        >
            <button
            ref={deleteButtonRef}
            onMouseEnter={() => handleMouseEnter('Удалить пользователя', deleteButtonRef)}
            onMouseLeave={handleMouseLeave}
            ><svg className='delete' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M14 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></button>
        </div>

        <div className='user-update'>
            <button
            ref={editButtonRef}
            onMouseEnter={() => handleMouseEnter('Редактировать пользователя', editButtonRef)}
            onMouseLeave={handleMouseLeave}
            
            ><svg className='edit' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></button>
        </div>
       
        <div className='user-update-status'>
            <button 
            ref={lockButtonRef}
            onClick={handlerLock}
            onMouseEnter={() => handleMouseEnter(isLock ? 'Пользователь заблокирован' : 'Пользователь не имеет ограничений', lockButtonRef)}
            onMouseLeave={handleMouseLeave}
            >
            

           {isLock ?  <svg className='lock' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z" fill="#1C274C"/>
</svg> :

<svg  className='unlock' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C4.13525 10.1379 3.40931 10.348 2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.2426 10 18.8284 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z" fill="#1C274C"/>
</svg>}

</button>
        </div>
        <div className='user-status'>
        Активен
        </div>
        
        {tooltip && (
        <div
          className="tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y+44}px`,
            position: 'absolute',
            pointerEvents: 'none', // Обеспечивает, чтобы курсор мог взаимодействовать с кнопкой
          }}
        >
          {tooltip.message}
        </div>
      )}
    </div>
  )
}
