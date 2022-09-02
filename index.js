const newsCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = (catagories) => {
    const mainDiv = document.getElementById('news');
    newDiv = document.createElement('div');
    mainDiv.innerHTML = `
                        <li class="list-group-item">Home</li>
                        <li class="list-group-item">${catagories.news_category[0].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[1].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[2].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[3].category_name}</li>
                        <li class="list-group-item text-primary bg-primary bg-opacity-10 px-2">${catagories.news_category[4].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[5].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[6].category_name}</li>
                        <li class="list-group-item">${catagories.news_category[7].category_name}</li>
        `;

};
newsCatagory();




