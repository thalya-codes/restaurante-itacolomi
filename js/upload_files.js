const $ = document.querySelector.bind(document);
const coversImgs = document.querySelectorAll(".second-step__container-uploads");
const inputsFile = document.querySelectorAll(".input-file")
const btnFileImage = document.querySelectorAll(".btn-input-file__image")


 const dragAndDrop = _ => {
    coversImgs.forEach((cover) => {
        cover.ondragover = e => e.preventDefault();
        cover.ondrop = e => {
            e.preventDefault()
    
            cover.classList.add("active-upload-user")
    
            const image = e.dataTransfer.files[0]
            const type = image.type;
            const reader = new FileReader();
    
            reader.onloadend = _ => {
                cover.innerHTML = `
                <img src=${reader.result} class="img-upload-user" >
            `
            }
    
            const validFormats = ["image/png", "image/jpg", "image/jpeg"];
    
    
            if(validFormats.includes(type)) {
                //faz a image aparecer
                reader.readAsDataURL(image)
            } else {
                alert("Please, enter image valid format!")
            }
            
    
    
            console.log(`drop | Image type: ${type} `)
        }
        
     })
    
 }

 const inputUploadFile = _ => {
    inputsFile.forEach((input, index) => {
        input.addEventListener("change", e => {
            const file = e.target.files[0];
            const type = file.type;
            const reader = new FileReader();
    
            coversImgs[index].classList.add("active-upload-user")
    
            reader.onload = _ => {
                coversImgs[index].innerHTML = `
                    <img src=${reader.result} class="img-upload-user"  alt="" >
                `
            }
    
    
            const validFormats = ["image/jpg" , "image/jpeg", "image/png"  ]
    
            if(validFormats.includes(type) ) {
                reader.readAsDataURL(file);
            } else {
                alert("enter as invalid format :D")
            }
    
    
            console.log(file)
        })
    })
    
 }


 dragAndDrop();
 inputUploadFile(); 

