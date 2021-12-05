'use strict'

const titleFerrari = 'Red car on the';
const titleAudi = 'How good is this car?';
const articles = {
    Ferrari: 'lorem lorem ahahha',
    Audi: 'blah blah blah, blah blah',
}

const expObj = {
    theme: 'Cars',
    articles: [
        {
            Ferrari: 'Text about this car',
            FerrariTitle: 'title',
        },
        {
            Audi: 'Text about this car',
            AudiTitle: 'title',
        },
    ],
};

const getArticlesWithTheme = (theme, articles, ...titles) => {
    const result = {
        theme,
        articles: [],
        }
    
    const models = Object.entries(articles);
    
    for (let i = 0; i < models.length; i++) {
        const model = models[i][0];

        const newArticle = {
            [model + 'Article']: models[i][1],
            [model + 'Title']: titles[i]
        }

        result.articles.push(newArticle);

    } 
    console.log(result);
    return result;
}

getArticlesWithTheme('Cars', articles, titleFerrari, titleAudi)