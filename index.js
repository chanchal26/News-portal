const newsCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = (catagories) => {
    const mainDiv = document.getElementById('news');
    newDiv = document.createElement('div');

    mainDiv.innerHTML = `
                        
            <a type="button" class="btn btn-light"><li class="list-group-item">Home</li></a>
            <a type="button"  onclick="newsDetails('01');" class="btn btn-light"><li class="list-group-item">${catagories.news_category[0].category_name}</li></a>
            <a type="button"  onclick="newsDetails('02')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[1].category_name}</li></a>
            <a type="button"  onclick="newsDetails('03')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[2].category_name}</li></a>
            <a type="button"  onclick="newsDetails('04')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[3].category_name}</li></a>
            <a type="button"  onclick="newsDetails('05')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[4].category_name}</li></a>
            <a type="button"  onclick="newsDetails('06')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[5].category_name}</li></a>
            <a type="button"  onclick="newsDetails('07')" class="btn btn-light"><li class="list-group-item">${catagories.news_category[6].category_name}</li></a>
            <a type="button" onclick="newsDetails('08')"  class="btn btn-light"><li class="list-group-item">${catagories.news_category[7].category_name}</li></a>         
        `;

};
newsCatagory();




const newsDetails = (demo) => {

    fetch(`https://openapi.programming-hero.com/api/news/category/${demo}`)
        .then(res => res.json())
        .then(data => displayDetails(data.data))

}

const displayDetails = (details) => {
    const head = document.getElementById('heading');
    if (details.length !== 0) {
        head.classList.add('d-none')
    }
    const item = document.getElementById('item');
    item.innerText = details.length;

    const containerDiv = document.getElementById('contaainer-div');
    details.forEach(detail => {
        const currentDiv = document.createElement('div');
        currentDiv.innerHTML = ``;
        currentDiv.innerHTML = `
    <div class="d-flex align-items-center justify-content-center">
    <div class="card mb-3" style="max-width: 940px, max-height:800px;">
    <div class="row g-0">
      <div class="col-md-4" style="width:500px,height:700;">
        <img  src="${detail.image_url}" class="img-fluid rounded-start" style="height:23rem;" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${detail.title}</h5>
          <p class="card-text">${detail.details.slice(0, 500)}</p>
        </div>
        
        <div class="d-flex align-items-center justify-content-around mt-5">
        
    <div class=" gap-3 d-flex align-items-center justify-content-center">
    <div >
    <img style="width:55px; border-radius:50%"  src="${detail.author.img}" alt="">
    </div>
        <div>
            <p>${detail.author.name ? detail.author.name : 'no writer'}</p>
            <p>${detail.author.published_date}</p>
        </div>
    </div>
    <div class="gap-2 d-flex align-items-center justify-content-center">
        <div>
        <i class="fa-regular fa-eye mb-3"></i>
        </div>
        <div>
            <p>${detail.total_view}</p>
        </div>
    </div>
    
    <div>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    </div>

    <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Show Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">News Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Title: ${detail.title}
        </br>
        Details: ${detail.details}
        </br
        Badge:${detail.rating.badge}
        </br>
        Number:${detail.rating.number}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>


</div>

      </div>
    </div>
  </div>
    </div>

`;

        containerDiv.appendChild(currentDiv);
    });



}


newsDetails();