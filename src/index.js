/*
    TEMPORARY FOR TESTS
    TODO: raznesty po componentam i sdelat sborshik
    TODO: decore image generator
*/

/*==============Random image generator============*/
let decore_image = document.querySelector(".image-decore");
if(typeof decore_image!== "undefined" && decore_image){
    const image_number = Math.floor(Math.random()*(2-1) + 1);
    decore_image.setAttribute('style', `background-image: url(decore-img-${image_number}.min.png)`)
    
}
//replace to express on start
/*================== END ==================*/

let login_form = document.getElementById('authorisation-form'),
register_form = document.getElementById('signup-form');


if(login_form && typeof login_form !== "undefined"){
    login_form.action = './chatlist.html';
}


if(register_form && typeof register_form !== "undefined"){
    register_form.action = './chatlist.html';    
}


