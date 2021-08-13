const elementBody = document.body;

$(window).scroll(function(){
    if($(this).scrollTop()> 20){
        $('#myBtn').fadeIn('slow');
    }else{
        $('#myBtn').fadeOut('slow');
    }
});

// scrolling to the top of the page
$('#myBtn').click(function(){
    $('html, body').animate({ scrollTop: 0}, "slow");
    return false;
});

$(window).scroll(function(){
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var wintop = $(window).scrollTop();
        if (pos < wintop + 600) {
            $(this).addClass("slide");
        }
    })
});

window.addEventListener('click', (e) => {
    if(e.target.id ==='productbtn'){
        window.location.assign('product.html');
    }
    if(e.target.id ==='cart'){
        window.location.assign('cart.html');
    }
    let modalDiv = document.createElement("div");
    let modalSpan = document.createElement("i");
    let modalImage = document.createElement("img");
    let caption = document.createElement('p');
    caption.innerText = "XX9 MARK HEADPHONES";
    caption.id = "caption";
    modalDiv.appendChild(modalSpan);
    modalDiv.appendChild(modalImage);
    modalDiv.appendChild(caption);
    modalDiv.id = "modalDiv";
    modalImage.id = "modalImage";
    modalSpan.className = "fas fa-times";
    modalSpan.id = "modalSpan";
    elementBody.appendChild(modalDiv);
    if(e.target.classList.contains("img-fluid")){
        modalDiv.style.display = "block";
        modalImage.src = e.target.src;
        console.log('clicked');
    }
        modalSpan.onclick = () => {
        modalDiv.style.display = "none";
    }
    if(e.target.id === "back"){
        window.history.back();
    }
}, false);


const contact = document.getElementById('contact');
console.log(contact)
contact.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(email === '' || email === null){
        alert('Please enter your email address');
    }else if(message === '' || message === null){
        alert('Please input your message');
    }else{
        alert('Message Sent');
        window.location.assign('index.html');
    }
});
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email === '' || email === null){
        alert('Please enter your email address');
    }else if(password === '' || password === null){
        alert('Please enter your password');
    }else{
        alert('Welcome');
        window.location.assign('index.html');
    }
});
