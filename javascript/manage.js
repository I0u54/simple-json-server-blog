let tbody = document.getElementById('tbody')
let fetchData = async ()=>{
    let api = await fetch('http://localhost:3000/blogs')
    let reponse = await api.json()
    return reponse
}

fetchData().then((data)=>{
    let blogs = data
    let html = ""
    blogs.map((b)=>{
        html+=`<tr><td>${b.id}</td><td>${b.title}</td><td><button onclick="deleteBlog(${b.id})" class="btn btn-danger">Delete</button></td></tr>`
    })
    tbody.innerHTML = html
})
let deleteBlog =async (id)=>{
    await fetch('http://localhost:3000/blogs/'+id,{method:"DELETE"})
    window.location.replace('../html/index.html')


}