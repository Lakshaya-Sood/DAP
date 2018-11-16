// import $ from 'jquery';

// $.ajax({
//     url: 'http://localhost:7777/GreetingApp/config.js',
//     dataType: 'script',
//     cache: true,
//     success: () => {
//         console.log( window.appConfig )
//         $.ajax({
//             url: window.appConfig.libraryLink,
//             dataType: 'script',
//             cache: true,
//             success: () => {
//                 console.log( 'loaded, hoooo' )
//             }
//         })
//     }
// })

// window.onload = function() {
//     var s = document.createElement('script');
//     s.type = 'text/javascript';
//     s.async = true;
//     s.src = 'http://localhost:7777/GreetingApp/config.js';
//     var x = document.getElementsByTagName('script')[0];
//     x.parentNode.insertBefore(s, x); 
// }
