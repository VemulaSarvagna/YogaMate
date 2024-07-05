export default function Pose(props){
    return(
        <>
           <div className="pose">
               <p className="name">
                   English Name: {props.english_name}
                </p>
                <p className="name">
                   sanskrit Name: {props.sanskrit_name_adapted}
                </p>
               <div className="photo1">
                   <img src={props.url_png}></img>
               </div>
               <p className="benefits">Benefits: </p>
               <p>{props.benefits}</p>
                
           </div>
        </>
    )
}



// .substring(0,120).concat("...")