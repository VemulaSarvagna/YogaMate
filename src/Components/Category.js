import { useNavigate } from "react-router-dom";

export default function Category(props){

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate(`/poses?id=${props.id}`);
    };


    const images={
         0:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.png",
         1:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483091/yoga-api/31_ozseum.png",
         2:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483078/yoga-api/9_ewvoun.png",
         3:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483072/yoga-api/3_aa0fgk.png",
         4:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483075/yoga-api/6_ri1w0e.png",
         5:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483081/yoga-api/15_vkviqn.png",
         6:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483079/yoga-api/10_wzpo85.png",
         7:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483081/yoga-api/16_g7ueht.png",
         8:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483078/yoga-api/11_dczyrp.png",
         9:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483088/yoga-api/26_mxkzlo.png",
         10:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483084/yoga-api/17_l9joyu.png",
         11:"https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483084/yoga-api/19_jadqwc.png" }
   
    return(
        <>
            <div className="category">
           
                <h4 className="name">
                   {props.name}
                </h4>
            <div className="photo">
                <img src={images[props.imageKey]}></img>
            </div>
                <p>{props.des?.substring(0,120).concat("...")}</p>
                {/* <button type="button" class="btn btn-warning">Let's See</button> */}

                <button type="button" className="btn btn-warning" onClick={handleButtonClick}>
        Let's See
      </button>

            </div>
        </>
    )
}