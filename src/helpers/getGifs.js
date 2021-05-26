

   export const getGifs =async (category)=>{
        const url= `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=7H5a5a6BTyJJRwYZDttjWPed0Q5hEmJy`;
        const resp= await fetch(url);
        const {data}= await resp.json();
        const gift = data.map(img=>{
           return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            }

        })
        return gift;
    }