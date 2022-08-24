let button = document.getElementById('button')
const $inpValue = $('#input')
const $origin = $('#origin')
const $length = $('#length')
const $intelligence = $('#intelligence')
const $playfulness = $ ('#playfulness')
const $other_pets_friendly = $('#other_pets_friendly')

let catData;
button.addEventListener('click' , function(){
    var name = $inpValue.val()
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
    headers: { 'X-Api-Key': 'CEZQyYWU7PXio0egnWOqSg==LoxVM7bNwWPEdSGV'},
    contentType: 'application/json',
    success: function(result) {
    console.log(result);
    catData = result.find(el => el.name === name)
    console.log(catData);
    $origin.text(catData.origin);
    $length.text(catData.length);
    $intelligence.text(catData.intelligence);
    $playfulness.text(catData.playfulness);
    $other_pets_friendly.text(catData.other_pets_friendly);

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











