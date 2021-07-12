let { image } = Qs.parse(location.search.slice(1));
image = image ? image : "car";
const Addimagefile = document.querySelector('.addimagefile');

const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${image}`;
const imagefun = async () => {
    const res = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6e9a8a05aamsh7354b4dcb45de67p1d059ajsn4a0a830fa07e",
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    })
    const addimage = document.querySelector('.addimage');

    let data = await res.json();
    let allimage = data.relatedSearches;

    let imageStr = "";
    allimage.forEach((element, index) => {
        imageStr += `
        <div class="md:p-2 p-1 w-1/5">
   
        
        <img alt="gallery" class="w-full
            object-cover h-full object-center block"
            src=${element.thumbnail.thumbnailUrl}>
    
            <div class="iconAdd">
          <span title="add image to download" onclick=addlocalimage(${index}) >
          <i class="fa  fa-plus-square text-green-400"></i>
           </span>
            <span title="zoom image">
                <a href=${element.thumbnail.thumbnailUrl} download><i class="fa  fa-search-plus text-blue-400"></i></a>
            </span>
            
        </div>
              </div>
             
              `
    })

    addimage.innerHTML = imageStr;
}

// add image to localStorage
async function addlocalimage(index) {
    alert("You have successfully add to download.")
    const res = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6e9a8a05aamsh7354b4dcb45de67p1d059ajsn4a0a830fa07e",
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    })
    let data = await res.json();
    let allimage = data.relatedSearches;

    let chooseImage = (allimage[index].thumbnail.thumbnailUrl);
    if ((localStorage.getItem("itemImage")) == null) {

        let arr = [];
        arr.push((chooseImage));
        localStorage.setItem("itemImage", JSON.stringify(arr));
    }
    else {

        arr = JSON.parse(localStorage.getItem("itemImage"))
        arr.push(chooseImage);
        localStorage.setItem("itemImage", JSON.stringify(arr));
    }

}
imagefun();
