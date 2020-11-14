
const loadArticles = function (elem) {
    elem.querySelector('h2').textContent = "Pewien wpis na blogu";
    elem.querySelector('p').textContent = "Ten artykuł został doładowany po pewnym czasie, ale użytkownik wiedział wcześniej gdzie może spodziewać się treśći na stronie. Dzięki temu jego wrażenia z przeglądania naszej strony będą lepsze :)";
    elem.querySelector('.author').textContent = "Jan Kowalski, reporter";
    const img = elem.querySelector('.avatar');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1000px-Placeholder_no_text.svg.png";
    img.alt = "Zdjęcie Jana Kowalskiego";
}

const createMarkup = function (index = 0) {
    const article = document.createElement('article'),
        h2 = document.createElement('h2'),
        p = document.createElement('p'),
        figure = document.createElement('figure'),
        img = document.createElement('img'),
        figcaption = document.createElement('figcaption');

    article.classList.add('entry', 'number-'+index);
    article.appendChild(h2);
    article.appendChild(p);

    img.classList.add('avatar');
    figcaption.classList.add('author');

    figure.appendChild(img);
    figure.appendChild(figcaption);

    article.appendChild(figure);


    return article;
};
function doSetTimeout(i) {
    setTimeout(function() { loadArticles(i); }, 2500);
  }

const articlesContainer = document.querySelector(".articles");
const numberOfArticles = 5;

for (let index = 0; index < numberOfArticles; index++) {
    const articleMarkup = createMarkup(index);
    articlesContainer.appendChild(articleMarkup);


    const timeToLoad = doSetTimeout(articleMarkup);
    console.log(timeToLoad);
}
// const articleMarkup = createMarkup();
// const articleMarkup2 = createMarkup();
// const articleMarkup3 = createMarkup();
// articlesContainer.appendChild(articleMarkup);
// articlesContainer.appendChild(articleMarkup2);
// articlesContainer.appendChild(articleMarkup3);

// document.body.appendChild(articleMarkup);
//   document.articles.

// setTimeout(loadArticles, 2000);
// setTimeout(loadArticles, 2000);
// setTimeout(loadArticles, 2000);