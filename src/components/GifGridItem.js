import React from 'react'


export const GifGridItem =({img})=>{
   const {title,url}=img;
    //console.log(title, url );

    return(
    <div className="animate__animated animate__bounce animate__fadeIn">
        <img src={url} alt={title}/>
        {title}
    </div>


    )
}