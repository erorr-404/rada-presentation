fetch('./data/news.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        const overlay = document.getElementById("overlay")
        const newsList = document.getElementById("events-container")
        const body = document.getElementById("doc-body")

        json.forEach(item => {
            let image = document.createElement("img")
            image.src = item.image

            let title = document.createElement("h2")
            title.innerHTML = item.title

            let description = document.createElement("h3")
            description.innerHTML = item.description

            let event = document.createElement("div")
            event.classList.add("event")
            event.setAttribute("data-modal-target", "#"+item.id)
            
            event.appendChild(image)
            event.appendChild(title)
            event.appendChild(description)

            if (item.date !== "none") {
              const date = document.createElement("h3")
              date.innerHTML = item.date
              date.classList.add("event-date")
              event.appendChild(date)
            }

            newsList.appendChild(event)

            //modals

            let modalTitle = document.createElement("div")
            modalTitle.classList.add("title")
            modalTitle.innerText = "Інформація"

            let modalCloseButton = document.createElement("button")
            modalCloseButton.setAttribute("data-close-button", null)
            modalCloseButton.classList.add("close-button")
            modalCloseButton.innerHTML = "×"

            let modalHeader = document.createElement("div")
            modalHeader.classList.add("modal-header")
            modalHeader.appendChild(modalTitle)
            modalHeader.appendChild(modalCloseButton)


            let modalPhoto = document.createElement("img")
            modalPhoto.classList.add("modal-event-img")
            modalPhoto.src = item.image

            let modalShotText = document.createElement("div")
            modalShotText.classList.add("modal-event-title")
            modalShotText.innerHTML = item.title

            let modalMainText = document.createElement("div")
            modalMainText.classList.add("modal-event-description")
            modalMainText.innerHTML = item.description

            let modalText = document.createElement("div")
            modalText.classList.add("text")
            modalText.appendChild(modalShotText)
            modalText.appendChild(modalMainText)

            if (item.date !== "none") {
              let modalDate = document.createElement("div")
              modalDate.classList.add("modal-event-date")
              modalDate.innerHTML = item.date
              modalText.appendChild(modalDate)
            }

            let modalBody = document.createElement("div")
            modalBody.classList.add("modal-body")
            modalBody.appendChild(modalPhoto)
            modalBody.appendChild(modalText)

            let modal = document.createElement("div")
            modal.setAttribute("id", item.id)
            modal.classList.add("modal")
            modal.appendChild(modalHeader)
            modal.appendChild(modalBody)

            body.appendChild(modal)
        })

        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        console.log(openModalButtons, closeModalButtons);

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
              closeModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
          button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
            })
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }
      
          function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }

    })