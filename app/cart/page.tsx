import React from 'react'
import '../../styles/main/cart.scss'
import { Order } from '@/Components/cart/Order'

export default function cart() {
  return (
    <section className='cart-container'>

      <div className='cart-title-wrapper'>
      <svg width="55px" height="55px" viewBox="0 0 48 48" id="Layer_1" version="1.1"  >
<path className="st0" d="M8.04,41.5H32.7c0.276,0,0.5-0.224,0.5-0.5v-5.233l2.736,2.736c0.023,0.023,0.052,0.034,0.077,0.051  
c0.019,0.025,0.029,0.056,0.053,0.079l0.64,0.64c0.417,0.417,0.969,0.646,1.554,0.646c0.592,0,1.146-0.229,1.563-0.646  
c0.001-0.001,0.002-0.001,0.003-0.002c0.852-0.864,0.851-2.262-0.006-3.118l-0.646-0.637c-0.023-0.023-0.053-0.034-0.079-0.053 
 c-0.017-0.026-0.029-0.055-0.051-0.077L33.2,29.543V7c0-0.276-0.224-0.5-0.5-0.5H8.04c-0.276,0-0.5,0.224-0.5,0.5v34  
C7.54,41.276,7.764,41.5,8.04,41.5z M26.74,27.239l-0.158,0.157l-1.006-2.367l2.367,1.012L26.74,27.239z M27.619,27.776l9.166,9.166 
 l-0.496,0.5l-3.235-3.235c0,0,0,0,0,0l-5.934-5.935L27.619,27.776z M39.114,38.568c-0.451,0.451-1.24,0.458-1.701-0.001
  l-0.417-0.417l1.459-1.467l0.237-0.237l0.424,0.418C39.582,37.329,39.581,38.094,39.114,38.568z M37.49,36.233l-9.163-9.163 
   l0.493-0.493l3.526,3.526c0,0,0.001,0.001,0.001,0.001l5.636,5.636L37.49,36.233z M8.54,7.5H32.2v21.043l-3.026-3.026 
   c-0.04-0.04-0.088-0.067-0.136-0.09c-0.008-0.004-0.013-0.013-0.021-0.016l-4.19-1.79c-0.003-0.001-0.005,0-0.008-0.001 
    c-0.086-0.071-0.193-0.119-0.313-0.119H13.036c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h11.229l1.683,3.961c0,0,0,0,0,0.001  
   l0.002,0.004c0.002,0.005,0.007,0.007,0.009,0.011c0.025,0.054,0.056,0.104,0.098,0.147l6.144,6.144V40.5H8.54V7.5z"/>
   <path className="st0" d="M13.39,14.293l1.197-1.197c0.416-0.417,1.144-0.417,1.562,0l0.231,0.232c0.796,0.796,2.182,0.795,2.976,0
     l0.232-0.232c0.416-0.417,1.144-0.417,1.562,0l0.305,0.306c0.41,0.41,1.013,0.632,1.554,0.615c0.579-0.019,1.13-0.278,1.512-0.711  
     c0.21-0.238,0.512-0.374,0.828-0.374c0.001,0,0.001,0,0.001,0c0.317,0,0.618,0.137,0.828,0.375l1.088,1.236 
      c0.099,0.112,0.236,0.17,0.375,0.17c0.117,0,0.235-0.041,0.33-0.125c0.208-0.183,0.228-0.499,0.045-0.706l-1.088-1.236
       c-0.398-0.454-0.974-0.714-1.577-0.714c-0.001,0-0.001,0-0.002,0c-0.604,0-1.179,0.26-1.578,0.713 
        c-0.203,0.231-0.485,0.363-0.793,0.373c-0.31,0.007-0.598-0.105-0.815-0.322l-0.305-0.306c-0.794-0.794-2.18-0.796-2.976,0 
         l-0.232,0.232c-0.418,0.417-1.146,0.417-1.562,0l-0.231-0.232c-0.795-0.794-2.18-0.796-2.976,0l-1.197,1.197  c-0.195,0.195-0.195,0.512,0,0.707S13.194,14.488,13.39,14.293z"/>
         <path className="st0" d="M13.39,19.016l1.197-1.197c0.431-0.431,1.131-0.43,1.562,0l0.231,0.232c0.796,0.796,2.182,0.795,2.976,0 
          l0.232-0.232c0.416-0.417,1.144-0.417,1.562,0l0.305,0.306c0.41,0.41,1.013,0.634,1.554,0.615c0.579-0.019,1.13-0.278,1.512-0.711 
           c0.21-0.238,0.512-0.374,0.828-0.374c0.001,0,0.001,0,0.002,0c0.316,0,0.617,0.137,0.827,0.375l1.088,1.236 
            c0.099,0.112,0.236,0.17,0.375,0.17c0.117,0,0.235-0.041,0.33-0.125c0.208-0.183,0.228-0.499,0.045-0.706l-1.087-1.236
              c-0.398-0.454-0.974-0.714-1.577-0.714c-0.001,0-0.002,0-0.003,0c-0.604,0-1.179,0.259-1.578,0.712 
               c-0.203,0.231-0.485,0.363-0.793,0.373c-0.31,0.009-0.598-0.105-0.815-0.322l-0.305-0.306c-0.794-0.794-2.18-0.796-2.976,0 
                l-0.232,0.232c-0.418,0.417-1.146,0.417-1.562,0l-0.231-0.233c-0.822-0.819-2.155-0.82-2.976,0l-1.197,1.197  c-0.195,0.195-0.195,0.512,0,0.707S13.194,19.211,13.39,19.016z"/>
</svg>
        <h2>Мои заказы</h2>
      </div>

<div className='cart-header-wrapper'>

<Order />

</div>
      
   </section>
  )
}

