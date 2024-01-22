function $(s) {
    return document.querySelector(s)
}

const writter = new Typewriter(".home_details h1",{
    loop:true,
    delay:60,
    autoStart:true,
    cursor: "<i class='ri-input-cursor-move'></i>",
    strings:[`we are a <strong>community</strong> spreading <br>
    happiness to our <strong>clients</strong>`, `we have experienced <strong>developers</strong>, creating meta startups to grow`]
})

$(".btn_nav_toggler").onclick = () => {
    $('.nav_list').classList.toggle('show')
}

// body scroll effect


let sections = document.querySelectorAll('.section'),
    nav_link = document.querySelectorAll('.nav_list li a');

window.onscroll = function(){
    const y = scrollY
    if(y>80) $('header').classList.add('active') 
    else $('header').classList.remove('active')

    sections.forEach((s,i) => {
        nav_link[i].classList.remove('active');
        
        let sec_h = s.offsetHeight,
            sec_top = s.offsetTop - 70;

        if(y>sec_top && y <= (sec_top + sec_h)){
            nav_link[i].classList.add('active');
        }
    })

}


// join form starts
$(".btn_join").onclick = function()
{
    $(".join_con").classList.add('show')
    $("#_join_name").focus()
}

$('.btn_close_join').onclick = () => $(".join_con").classList.remove('show');

let jfields = document.querySelectorAll('.join_field input')
jfields.forEach(f => {
    f.oninput = function() {
        if(this.value !== ''){
            this.classList.add('valid')
            return
        };
        this.classList.remove('valid')
        
    }
})
$(".btn_submit_join").onclick = () => alert('cannot process this request currently !');
// join form ends


// contact form

$(".btn_continue").onclick = function() {
    $(".form_err").innerHTML = 'cannot process this request currently !'
}

nav_link.forEach((l) => {
    l.onclick = function() {
        this.parentElement.parentElement.classList.remove('show')
    }
})

