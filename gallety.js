fetch('./images/gallery/images.json')
    .then((response) => response.json())
    .then((json) => {
        const photosGrid = document.getElementById("photos-grid")

        json.forEach(item => {
            let image = document.createElement("img")
            image.src = item.path

            photosGrid.appendChild(image)
        })
    })