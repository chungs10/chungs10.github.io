function SellingPointL(params) {
  return (
    <>
      <div className="sellingPointL">
        <div className="sellingImgL">
          <img
            src={params.museumImg}
            alt="Museum Interior"
            width={params.imgWidth}
          />
          <p class="imgCaptionL">{params.museumName}</p>
        </div>

        <div className="sellingTextL">
          <h4>{params.sellingTitle}</h4>
          <p>{params.sellingText1}</p>
          <br />
          <p>{params.sellingText2}</p>
        </div>
      </div>
    </>
  );
}

export default SellingPointL;
