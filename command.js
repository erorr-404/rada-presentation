fetch('./data/members.json')
    .then((response) => response.json())
    .then((json) => {
        const main = document.getElementById("main")

        json.forEach(item => {
            const name = item.secondName + " " + item.firstName
            const position = item.position
            const bio = item.description
            const img = item.image
            const id = item.id

            const profile_card = `
            <div class="card shadow" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${position}</h6>
                    <p class="card-text text-truncate">${bio}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${id}">Детальніше</button>
                </div>
            </div>
            `

            const profile_modal = `
            <div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">Інформація про учасника</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${img}" class="img-fluid my-2 rounded" alt="${name}">
                            <h5>${name}</h5>
                            <h6 class="mb-2 text-body-secondary">${position}</h6>
                            <p>${bio}</p>
                        </div>
                    </div>
                </div>
            </div>
            `

            const parser = new DOMParser()
            const card = parser.parseFromString(profile_card, "text/html")
            const modal = parser.parseFromString(profile_modal, "text/html")
            
            main.appendChild(card.body.firstChild)
            main.appendChild(modal.body.firstChild)
        })

    })