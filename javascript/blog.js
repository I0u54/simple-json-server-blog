let mainSection = document.getElementById("main")
let id = new URLSearchParams(window.location.search).get('id')
let fetchData = async ()=>{
    let api = await fetch('http://localhost:3000/blogs/'+id)
    let reponse = await api.json()
    return reponse
}
fetchData().then((data)=>{
    let blog = data
    
   mainSection.innerHTML = `<div><h1>${blog.title}</h1><p>${blog.body}.</p></div>`
})