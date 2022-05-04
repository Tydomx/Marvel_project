const charId = localStorage.getItem('charSelected');

function fetching() {
    var publicKey = '35fad408979368e76379f831cba43f4d';
    var privateKey = '5d96d5ad0d54441e8920c0c482bc142e3efd0013';
    var ts = 1;
    var hash = hashing(ts, publicKey, privateKey);
    var url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${charId}`;
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const charPath = data.data.results[0].thumbnail.path 
        const charImg = (charPath + "/portrait_incredible.jpg")
        console.log (charImg)
        document.getElementById('name').textContent = data.data.results[0].name
      document.getElementById('description').textContent = data.data.results[0].description;
      document.getElementById("charImg").src = charImg; 
    })
}

function hashing(ts, publicKey, privateKey) {
    var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()
    return hash;
}


// let APIKEY = 'RnIvb4HLPtrRcGkX1YVlWzJBPzPoGknC';
// document.addEventListener("DOMContentLoaded", init);

// function init() {
//     document.getElementById("btnSearch").addEventListener("click", function (ev) {
//         ev.preventDefault();
//         let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
//         let str = document.getElementById("search").value.trim();
//         url = url.concat(str);
//         console.log(url);

//         fetch(url)
//             .then(response => response.json())
//             .then(content => {
//                 // data, pagination, meta
//                 console.log(content.data);
//                 console.log('META', content.meta);
//                 let fig = document.createElement('figure');
//                 let img = document.createElement('img');
//                 let fc = document.createElement('figcaption');
//                 img.src = content.data[0].images.downsized.url;
//                 img.alt = content.data[0].title;
//                 fc.textContent = content.data[0].title;
//                 fig.appendChild(img);
//                 fig.appendChild(fc);
//                 let out = document.querySelector('.out');
//                 out.insertAdjacentElement('afterbegin', fig);
//                 document.querySelector('#search').value = '';
//             })
//             .catch(function (err) {
//                 console.error(err);
//             })
//     })

fetching();
hashing();
