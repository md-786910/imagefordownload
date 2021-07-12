const addimage = document.querySelector('.addimage');

let getimage = JSON.parse(localStorage.getItem("itemImage"));
console.log(getimage);

function mustImage() {
    let getstr = "";
    getimage.forEach((element, index) => {
        getstr += `
    <div class="md:p-2 p-1 w-1/5">
    <img alt="gallery" class="w-full
    object-cover h-full object-center block"
    src=${element} >
<div class="iconAdd">
    <span  title="delete image" onclick="deleteimg(${index})">
        <i  class="fa fa-1x fa-trash text-red-700"></i>
    </span>
    <a href=${element} download>
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

function deleteimg(index) {
    console.log(index);
    let arr = JSON.parse(localStorage.getItem("itemImage"));
    console.log(arr)
    arr.splice(arr, 1)
    localStorage.setItem("itemImage", JSON.stringify(arr));
    // const newdata = allitem.filter((elem, ind) => ind != index);
    // console.log(newdata)
    window.location.reload();
    mustImage();
}


mustImage();
