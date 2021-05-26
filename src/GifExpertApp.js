import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';





const GifExpertApp = props => {
    const [categories, setcategories] = useState(['One Punch']);
    // const handleAdd=()=>{
    //     setcategories(cast =>[...categories,'HunterxHunter']);

    // };

    return (
        <>
        <h2>GifExpertApp </h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>
        <ol>
            {
                categories.map(category=>(
                     <GifGrid 
                     key={category}
                     category={category} 
                     />
                ))
            }
        </ol>
        {/* //se espera una exprecion de JS  no una estructura ciclica  */}
        </>
    );
};


export default GifExpertApp;