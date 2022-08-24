let button = document.getElementById('button')
const $inpValue = $('#input')
let origin = document.getElementById('origin')
let length = document.getElementById('length')
let intel = document.getElementById('intelligence')
let playFull = document.getElementById('playfulness')
let oPF = document.getElementById('other_pets_friendly')


button.addEventListener('click' , function(){
    var name = $inpValue.val()
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
    headers: { 'X-Api-Key': 'CEZQyYWU7PXio0egnWOqSg==LoxVM7bNwWPEdSGV'},
    contentType: 'application/json',
    success: function(result) {
    console.log(result);
    },
    
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
})

// button.addEventListener('click' , function(){
//     fetch('https://api.api-ninjas.com/v1/cats?name=' + name ,
//     'CEZQyYWU7PXio0egnWOqSg==LoxVM7bNwWPEdSGV')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => alert('wrong breed name!'))
// })








