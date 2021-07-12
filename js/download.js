const addimage = document.querySelector('.addimage');

let getimage = JSON.parse(localStorage.getItem("setImage"));
console.log(getimage);
let allimage = getimage[0];
function mustImage() {
    let getstr = "";
    allimage.forEach((element, index) => {
        console.log(element)
        getstr += `
    <div class="md:p-2 p-1 w-1/5">
    <img alt="gallery" class="w-full
    object-cover h-full object-center block"
    src=${element.thumbnail.thumbnailUrl} onclick="localImage(${index})">
<div class="iconAdd">
    <span onclick="deleteimage(${index}) title="delete image">
        <i class="fa fa-1x fa-trash text-red-700 t"></i>
    </span>
    <a href=${element.thumbnail.thumbnailUrl} download>
        <span title="download image">
            <i class="fa fa-1x fa-file-download text-green-700 t"></i>
        </span>
    </a>
</div>
</div>
`
    });
    addimage.innerHTML = getstr;
}
function deleteimage(index) {
    console.log(index)
    let image = getimage[0];
    // let allimage = image[index].thumbnail.thumbnailUrl;
    // console.log(allimage)
    image.splice(index, 1)
    mustImage();
}

mustImage();