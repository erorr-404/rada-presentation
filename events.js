$.getJSON("data/news.json", function (data) {
  const mainContainer = $("#events-main");

  data.forEach(event => {
    const title = event.title
    const mainText = event.description
    const image = event.image
    const subImages = event.subImages
    const date = event.date
    const id = event.id

    const card = $(`
      <div class="card shadow" style="width: 24rem;">
        <img src="${image}" class="card-img-top img-fluid" style="min-height: 300px !important; max-height: 300px !important; object-fit: cover;" height="300px" alt="${title}">
        <div class="card-body">
          <h5 class="card-title text-truncate">${title}</h5>
          <p class="card-text mb-1 text-truncate">${mainText}</p>
          <p class="card-text mb-2"><small class="text-body-secondary">${date}</small></p>
          <button type="button" class="btn btn-primary shadow" data-bs-toggle="modal" data-bs-target="#${id}">
            Детальніше
          </button>
        </div>
      </div>
    `)

    const modal = $(`
      <div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Деталі</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="${id}-carousel" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#${id}-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#${id}-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#${id}-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#${id}-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${image}" class="img-fluid object-fit-cover" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="${subImages[0]}" class="img-fluid object-fit-cover" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="${subImages[1]}" class="img-fluid object-fit-cover" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="${subImages[2]}" class="img-fluid object-fit-cover" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${id}-carousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${id}-carousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <h1>${title}</h1>
              <p><small>${date}</small></p>
              <p>${mainText}</p>
            </div>
            <div class="modal-footer">
              <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `)

    card.appendTo(mainContainer)
    modal.appendTo(mainContainer)
  });

})