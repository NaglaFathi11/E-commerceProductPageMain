import "./ProductItem.css";
import CartIcon from "../../../public/images/icon-cart.svg";
import PlusIcon from "../../../public/images/icon-plus.svg";
import MinusIcon from "../../../public/images/icon-minus.svg";
import PreviousIcon from "../../../public/images/icon-previous.svg";
import NextIcon from "../../../public/images/icon-next.svg";
import { useState, useEffect } from "react";
import ShowProductImages from "../ShowProductImages/ShowProductImages";

export default function ProductItem(props) {
  const [data, setData] = useState([
    {
      id: 1,
      bigImage: "/images/image-product-1.jpg",
      thumbnailImage: "/images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      bigImage: "/images/image-product-2.jpg",
      thumbnailImage: "/images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      bigImage: "/images/image-product-3.jpg",
      thumbnailImage: "/images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      bigImage: "/images/image-product-4.jpg",
      thumbnailImage: "/images/image-product-4-thumbnail.jpg",
    },
  ]);

  // useEffect(() => {
  //   function CallAPI() {
  //     fetch("http://localhost:3000/images").then((response) =>
  //       response.json().then((response) => setData(response))
  //     );
  //   }
  //   CallAPI();
  // }, []);

  // console.log(data);

  // To know BigImage index
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  // console.log(currentImageIndex)
  function handleThumbnailClick(index) {
    setcurrentImageIndex(index);
  }

  // To show BigImage in slider by thumbnailImageIndex
  const bigImage = data[currentImageIndex]?.bigImage;

  // console.log(data);
  // console.log(bigImage);

  // console.log("Data:", data);
  // console.log('First Item:', data[0]);
  // console.log('Big Image of First Item:', data[0]?.bigImage);

  // handle minus button
  const [count, setCount] = useState(0);
  function handleMinusCount() {
    setCount(count - 1);
    if (count <= 0) setCount(0);
  }

  // Slider functionality
  const [slider, setSlider] = useState(0);
  function PrivioustBTN() {
    const isFirstSlider = slider == 0;
    const newIndex = isFirstSlider ? data.length - 1 : slider - 1;
    setSlider(newIndex);
    setcurrentImageIndex(newIndex);
  }

  function NextBTN() {
    const isLastSlider = slider == data.length - 1;
    const newIndex = isLastSlider ? 0 : slider + 1;
    setSlider(newIndex);
    setcurrentImageIndex(newIndex);
  }
  // console.log(data.length)

  const [imagesIsVisible, setImageIsVisible] = useState(false);
  function CloseImagesSection() {
    setImageIsVisible(true);
  }

  const storeCountNum = () => {
    props.Test(count);
    setCount(0);
    // console.log(count)
  };
  return (
    <div id="allSections">
      <ShowProductImages
        data={data}
        currentImageIndex={currentImageIndex}
        bigImage={bigImage}
        PrivioustBTN={PrivioustBTN}
        NextBTN={NextBTN}
        handleThumbnailClick={handleThumbnailClick}
        imagesIsVisible={imagesIsVisible}
        setImageIsVisible={setImageIsVisible}
      />

      <section id="picture-item">
        <div id="cursorial">
          <img src={bigImage} alt="" id="bigIMG" onClick={CloseImagesSection} />
          <button className="prevNextIcons PreviousIcon" onClick={PrivioustBTN}>
            <img src={PreviousIcon} alt="" />
          </button>
          <button className="prevNextIcons NextIcon" onClick={NextBTN}>
            <img src={NextIcon} alt="" />
          </button>
        </div>

        <div id="thumbnails">
          {data.map((item, index) => {
            return (
              <ul key={item.id} id="itemsList">
                <img
                  id="thumbnailsIMG"
                  src={item.thumbnailImage}
                  alt=""
                  onClick={() => handleThumbnailClick(index)}
                  className={
                    currentImageIndex == index ? "thumbnailImgActive" : ""
                  }
                />
              </ul>
            );
          })}
        </div>
      </section>

      <section id="text-item">
        <div id="headerWrapper">
          <label>Sneaker Company</label>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>

        <p>
          These low-profile sneakers are your perfect casual wear <br />{" "}
          companion. Featuring a durable rubber outer sole, they’ll <br />{" "}
          withstand everything the weather can offer.
        </p>

        <div id="priceWrapper">
          <div id="price">
            <span>$125.00</span>
            <label>50%</label>
          </div>
          <span id="old-price">
            <s>$250.00</s>
          </span>
        </div>

        <div id="counter-plus-addCart">
          <div id="counter-btn">
            <button onClick={handleMinusCount}>
              <img src={MinusIcon} alt="" id="MinusIcon" />
            </button>
            <button>{count}</button>
            <button onClick={() => setCount(count + 1)}>
              <img src={PlusIcon} alt="" id="PlusIcon" />
            </button>
          </div>

          <button id="cartBtn" onClick={storeCountNum}>
            <img src={CartIcon} id="CartIconAdd"></img>Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}
