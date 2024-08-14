import './ShowProductImages.css'
import PreviousIcon from '../../../public/images/icon-previous.svg'
import NextIcon from '../../../public/images/icon-next.svg'
import xClose from '../../../public/images/icon-close.svg'

export default function ShowProductImages(props) {

    function handleCloseClick(){
        props.setImageIsVisible(false)
    }

   
  return (
  <>
    
    {props.imagesIsVisible ? 
       <div id='container'>
          <section id='picture-item'>
            <div id='slider'>
                <img src={props.bigImage} alt="" id='bigIMG'/>  
                <button className='prevNext PrevIcon' onClick={props.PrivioustBTN}><img src={PreviousIcon} alt="" /></button>
                <button className='prevNext NexIcon' onClick={props.NextBTN}><img src={NextIcon} alt="" /></button> 
                <img src={xClose} alt="no-found" id='closeImageSection' onClick={handleCloseClick}/>   
            </div>
                 
            <div id="thumbnails">
                {props.data.map((item, index) => {
                  return (
                    <ul key={item.id} id='itemsList'>
                        <img
                             id='thumbnailsIMG'
                             src={item.thumbnailImage}
                             alt=""
                             onClick={() => props.handleThumbnailClick(index)} 
                             className = {props.currentImageIndex == index ? 'thumbnailImgActive' : ''}
                        />
                    </ul>
                        )
                    })}
            </div>
          </section>
       </div>
    : null}
                    
  </>
  )
}

