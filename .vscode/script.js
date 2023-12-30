// Lista de botões com as informações

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item a")
  const contents = document.querySelectorAll(".content")

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault()
      const contentId = this.getAttribute("data-content")

      contents.forEach((content) => {
        content.classList.remove("active")
      })

      document.getElementById(contentId).classList.add("active")
    })
  })
})

// ENTER THE MATRIX
function openPopup() {
  document.getElementById("popup").style.display = "block"
}

function closePopup() {
  document.getElementById("popup").style.display = "none"
}

document.addEventListener("DOMContentLoaded", function () {
  const matrixLink = document.querySelector('[data-content="matrix"]')
  matrixLink.addEventListener("click", function (event) {
    event.preventDefault()
    openPopup()
  })
})