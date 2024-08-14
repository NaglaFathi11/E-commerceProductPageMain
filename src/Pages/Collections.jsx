import shoes1 from '../../public/images/LowCutShoes.webp'
import shoes2 from '../../public/images/boots.webp'
import shoes3 from '../../public/images/HighHeels.webp'
import shoes4 from '../../public/images/Sandals.webp'

export default function Collections() {
  return (
    <div id='collectionsWrapper'>
      <h2>Collections</h2>
      <h4>Low-Cut Shoes</h4>
      <img src={shoes1} alt="" />
      <h4>Boots</h4>
      <img src={shoes2} alt="" />
      <h4>High Heels</h4>
      <img src={shoes3} alt="" />
      <h4>Sandals</h4>
      <img src={shoes4} alt="" />
    </div>
  )
}
