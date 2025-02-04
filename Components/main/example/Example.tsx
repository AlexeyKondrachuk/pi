import React, { useState } from 'react'
import '../../../styles/main/example.scss'
import FullScreenSlider from './FullScreenSlider'
import { imagePhysics, imagesMath } from './dataFiles'

export const Example = () => {

  const [slider1State, setSlider1State] = useState({ currentIndex: 0, 
    
  });
  const [slider2State, setSlider2State] = useState({ currentIndex: 0, 
    
  });

const slider1 = '1'
const slider2 = '2'

const handleSlideChange = (sliderId: string, newIndex: number) => {
  if (sliderId === '1') {
    setSlider1State({
      currentIndex: newIndex,
     
      
    });
  } else if (sliderId === '2') {
    setSlider2State({
      currentIndex: newIndex,
    
      

    });
  }
};

  return (
    <div className='example-container'>

        <div className='example-header'>

<svg width="50px" height="50px" viewBox="0 0 48 48" id="Layer_1" version="1.1"xmlns="http://www.w3.org/2000/svg" >
<path className="st0" d="M7.25,41.5h23.5c0.276,0,0.5-0.224,0.5-0.5V7c0-0.276-0.224-0.5-0.5-0.5H7.25c-0.276,0-0.5,0.224-0.5,0.5v34  
C6.75,41.276,6.974,41.5,7.25,41.5z M7.75,7.5h22.5v33H7.75V7.5z"/><path className="st0" 
d="M9.625,16.875h5.5c0.276,0,0.5-0.224,0.5-0.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-5.5c-0.276,0-0.5,0.224-0.5,0.5 
 v5.5C9.125,16.651,9.349,16.875,9.625,16.875z M10.125,11.375h4.5v4.5h-4.5V11.375z"/><path className="st0" 
 d="M27.75,10.375H19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h8.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,10.375,27.75,10.375z"/>
 <path className="st0" d="M27.75,14.75H19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h8.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,14.75,27.75,14.75z"/>
 <path className="st0" d="M27.75,19.125H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,19.125,27.75,19.125z"/>
 <path className="st0" d="M27.75,23.5H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,23.5,27.75,23.5z"/>
 <path className="st0" d="M27.75,27.875H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,27.875,27.75,27.875z"/>
 <path className="st0" d="M27.75,32.25H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,32.25,27.75,32.25z"/>
 <path className="st0" d="M27.75,36.625H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,36.625,27.75,36.625z"/>
 <path className="st0" d="M40.75,22.048c0.276,0,0.5-0.224,0.5-0.5v-5.594c0-1.983-1.49-3.607-3.407-3.856V9.173  
 c0-1.172-0.953-2.125-2.125-2.125s-2.125,0.953-2.125,2.125v3.042c-0.516,0.255-0.875,0.782-0.875,1.396v1.24v20.5 
  c0,0.057,0.015,0.111,0.033,0.162c0.003,0.008,0,0.017,0.003,0.025l1.893,4.692c0.177,0.439,0.597,0.723,1.07,0.723c0,0,0,0,0,0
    c0.473,0,0.894-0.284,1.071-0.722c0,0,0,0,0,0l1.893-4.692c0.003-0.008,0.001-0.017,0.003-0.025 
     c0.018-0.051,0.033-0.104,0.033-0.162v-20.5v-1.24c0-0.073-0.012-0.142-0.021-0.213c0.919,0.489,1.553,1.445,1.553,2.556v5.594  
     C40.25,21.824,40.474,22.048,40.75,22.048z M33.718,15.351h4v19.5h-4V15.351z M37.718,14.351h-4v-0.74 
      c0-0.31,0.252-0.563,0.563-0.563h2.875c0.31,0,0.563,0.252,0.563,0.563V14.351z M34.593,9.173c0-0.62,0.505-1.125,1.125-1.125 
       s1.125,0.505,1.125,1.125v2.875h-2.25V9.173z M35.862,39.855c-0.032,0.08-0.096,0.097-0.144,0.097c-0.047,0-0.111-0.017-0.143-0.097 
        l-1.616-4.005h3.519L35.862,39.855z"/>
</svg>
        <h2>
        Примеры работ.
        </h2>

        </div>

        <span className='line'></span>

        <p className='discription-example'>
        Работы и задания в формате .doc  .pdf  .jpg
             </p>
       
   

        
        <div className='slider-container'>
   

 
      <FullScreenSlider 
      currentIndex={slider1State.currentIndex}
      onSlideChange={handleSlideChange}
      images={imagesMath} 
      sliderId={slider1}
      
      />

      <FullScreenSlider
      currentIndex={slider2State.currentIndex}
      onSlideChange={handleSlideChange}
       images={imagePhysics} 
       sliderId={slider2}
       
       />
    </div>
    <span className='line'></span>

        </div>
  )
}
