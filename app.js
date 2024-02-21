    // Toggle mobile menu visibility
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    var scroll = new SmoothScroll('a[href*="#"]');



// const form = document.querySelector('form');
// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "username",
//     Password: "password",
//     To: 'them@website.com',
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }