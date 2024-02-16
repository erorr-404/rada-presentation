fetch('./data/members.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        list = document.getElementById("memberTable")
        json.forEach(item => {
            let img = document.createElement("img")
            img.src = item.image

            let h2 = document.createElement("h2")
            h2.innerText = item.secondName + " " + item.firstName

            let h3 = document.createElement("h3")
            h3.innerText = item.position

            let member = document.createElement("div")
            member.classList.add("person")
            member.appendChild(img)
            member.appendChild(h2)
            member.appendChild(h3)
            list.appendChild(member)
        });
    });