import React from 'react'
import Pickmeals from '../Assets/pick-meals-image.png'
import Choosemeals from '../Assets/choose-image.png'
import Deliverymeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData=[
        {
            image:Pickmeals,
            title:'Pick Meals',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing recusandae in ad amet aspernatur accusantium rem nobis nam sunt.'
        }, 
        {
            image:Choosemeals,
            title:'Choose How Often',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing recusandae in ad amet aspernatur accusantium rem nobis nam sunt.'
        },
        {
            image:Deliverymeals,
            title:'Fast Deliveries',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing recusandae in ad amet aspernatur accusantium rem nobis nam sunt.'
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work </p>
          <h1 className='primary-heading'>How It Works </h1>
            <p className='primary-text'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reiciendis? Velit beatae eius, ex ea nesciunt fugiat possimus
   in, doloribus officia aperiam non nemo placeat delectus quibusdam rem tempora ratione!</p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((item)=>(
                    <div className='work-section-info' key={item.title}>
                        <div className='info-boxes-img-container'>
                            <img src={item.image}></img>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.text} </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work