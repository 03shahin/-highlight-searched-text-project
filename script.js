
const buttonSearch = document.querySelector('button')
const searchinputElem = document.querySelector('input')
const paragraphID = document.querySelector('#paragraph')

const Search = () =>{

    let searchinputvalue = searchinputElem.value
   // let searchRegex = `/${searchinputvalue}/g`

   let searchRegex = new RegExp (`${searchinputvalue}` , 'gi')

paragraphID.innerHTML = paragraphID.textContent.replace(searchRegex , (item) => `{<mark>${item}</mark >}`)
}

buttonSearch.addEventListener('click' , Search)