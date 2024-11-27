const options = {
	keyboard: true,
	size: 'fullscreen'
};

$.getJSON("assets/gallery/images.json", function(data) {
  const mainContainer = $("#gallery-main");

  data.forEach(image => {
    
    const id = image.id
    const path = image.path
    
    const element = $(`
      <img class="img-fluid gallery-image shadow" src="${path}" id="${id}" alt="Image">
    `)

    element.appendTo(mainContainer)

  })
})