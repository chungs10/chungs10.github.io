function SellingPointR(params) {
  return (
    <>
      <div className="sellingPointR">
        <div className="sellingImgR">
          <img
            src={params.museumImg}
            alt="Museum Interior"
            width={params.imgWidth}
          />
          <p class="imgCaptionR">{params.museumName}</p>
        </div>

        <div className="sellingTextR">
          <h4>{params.sellingTitle}</h4>
          <p>{params.sellingText1}</p>
          <br />
          <p>{params.sellingText2}</p>
        </div>
      </div>
    </>
  );
}

export default SellingPointR;
