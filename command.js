fetch('./data/members.json')
    .then((response) => response.json())
    .then((json) => {
        const overlay = document.getElementById("overlay")
        //const overlay = window.getComputedStyle(document.querySelector(".table-container"), ":after")
        const body = document.getElementById("doc-body")

        console.log(json)
        const list = document.getElementById("memberTable")

        json.forEach(item => {
            let img = document.createElement("img")
            img.src = item.image

            let h2 = document.createElement("h2")
            h2.innerText = item.secondName + " " + item.firstName

            let h3 = document.createElement("h3")
            h3.innerText = item.position

            let member = document.createElement("div")
            member.classList.add("person")
            member.setAttribute("data-modal-target", "#"+item.id)

            member.appendChild(img)
            member.appendChild(h2)
            member.appendChild(h3)
            list.appendChild(member)

            //user modal

            let modalTitle = document.createElement("div")
            modalTitle.classList.add("title")
            modalTitle.innerText = "Інформація"

            let modalCloseButton = document.createElement("button")
            modalCloseButton.setAttribute("data-close-button", null)
            modalCloseButton.classList.add("close-button")
            modalCloseButton.innerText = "×"

            let modalHeader = document.createElement("div")
            modalHeader.classList.add("modal-header")
            modalHeader.appendChild(modalTitle)
            modalHeader.appendChild(modalCloseButton)


            let modalMemberPhoto = document.createElement("img")
            modalMemberPhoto.src = item.image

            let modalMemberName = document.createElement("div")
            modalMemberName.classList.add("name")
            modalMemberName.innerText = item.secondName + " " + item.firstName

            let modalMemberPosition = document.createElement("div")
            modalMemberPosition.classList.add("member-position")
            modalMemberPosition.innerText = item.position

            let modalMemberDescription = document.createElement("div")
            modalMemberDescription.classList.add("description")
            modalMemberDescription.innerText = item.description

            let modalText = document.createElement("div")
            modalText.classList.add("text")
            modalText.appendChild(modalMemberName)
            modalText.appendChild(modalMemberPosition)
            modalText.appendChild(modalMemberDescription)

            let modalBody = document.createElement("div")
            modalBody.classList.add("modal-body")
            modalBody.classList.add("user-modal")
            modalBody.appendChild(modalMemberPhoto)
            modalBody.appendChild(modalText)

            let modal = document.createElement("div")
            modal.setAttribute("id", item.id)
            modal.classList.add("modal")
            modal.appendChild(modalHeader)
            modal.appendChild(modalBody)

            body.appendChild(modal)
        });
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

    });

