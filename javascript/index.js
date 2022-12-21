let mainSection = document.getElementById("main")
let fetchData = async ()=>{
    let api = await fetch('http://localhost:3000/blogs')
    let reponse = await api.json()
    return reponse
}
fetchData().then((data)=>{
    let blogs = data
    let html = ""
   blogs.map((b)=>{
    html+=`<div><h1>${b.title}</h1><p>${b.body}. <a href="blog.html?id=${b.id}">More</a></p></div>`
   })
   mainSection.innerHTML = html
})

