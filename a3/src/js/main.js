import { masks } from "./modules/masks.js"

const data_node = document.querySelectorAll('input')
const data = Array.from(data_node)
console.log(data)

data_node.forEach(($input) => {
    const field = $input.dataset.js
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

