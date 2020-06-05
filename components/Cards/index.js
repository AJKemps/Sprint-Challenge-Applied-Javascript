// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function getNews(articleType) {
    const thePromise = axios.get(`https://lambda-times-backend.herokuapp.com/articles`)

    thePromise.then(response => {
        console.log('the getNews API returned:', response)

        const article = response.data.articles[articleType]

        article.forEach(article => {
            const name = article.authorName
            const photo = article.authorPhoto
            const headline = article.headline

            const card = document.createElement('div')
                card.classList.add('card')

            const headlineDiv = document.createElement('div')
                headlineDiv.classList.add('headline')
                headlineDiv.textContent = headline

            const authorDiv = document.createElement('div')
                authorDiv.classList.add('author')

            const imgContainter = document.createElement('div')
                imgContainter.classList.add('img-container')

            const authorImg = document.createElement('img')
                authorImg.img = photo

            const authorName = document.createElement('span')
                authorName.textContent = `By ${name}`

            card.append(headlineDiv, authorDiv)
            authorDiv.append(imgContainter,authorName)
            imgContainter.append(authorImg)

            document.querySelector('.cards-container').append(card)
        })
    })

    .catch(error => {
        console.log('there was an error:', error)
    })

    .finally(() =>{
        console.log('done')
    })
}

getNews('bootstrap')
getNews('javascript')
getNews('jquery')
getNews('node')
getNews('technology')