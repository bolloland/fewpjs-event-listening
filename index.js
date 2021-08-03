const input = document.querySelector("#input")
const fifth =   document.querySelector("body > div:nth-child(5) > div > div > div > div")

const redBlue = () => {
  let style = document.querySelector("head > style")
  let newStyle = style.innerHTML.replace("red", "blue")
  style.innerText = newStyle
}

input.addingEventListener('click', redBlue)

fifth.addingEventListener('click', () => {
  fifth.innerText = "Courtney I Love"
})

fifth.addingEventListener('mouseover', () => {
  fifth.innerText = "Courtney I Love"
})