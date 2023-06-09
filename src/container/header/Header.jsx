import People from '../../assets/people.png';
import Ui from '../../assets/ai.png';
import './header.css'

const Header = () => {
  return (
    <div className='gtp3__header section__padding' id='home'>
        <div className='gtp3__header-content'>
          <h1 className='gradient__text'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='gtp3__header-content__input'>
            <input type="email" placeholder='Your Email Address'/>
            <button type='button'>Get Started</button>
          </div>
          <div className='gtp3__header-content__people'>
            <img src={People} alt="people-image" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
         <div className='gtp3__header-image'>
          <img src={Ui} alt="ai-image"/>
        </div>  
    </div>
  )
}

export default Header