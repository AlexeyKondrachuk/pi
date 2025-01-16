import React from 'react'

export const task = () => {
  return (
    <article className='task-container'>

        <h3>Предмет - Математика</h3>
         <span>Раздел - Алгебра</span>

         Условие задачи
         <p className='task-description'>description</p>
        <figure className="task_conditions">
    <img src="" alt="Название товара" />
    <figcaption>Название товара</figcaption>
     </figure>
    
    <button>Добавить в корзину</button>
    <button>Удалить из корзины</button>
    <button>Добавить в избранное</button>

     </article>
  )
}

