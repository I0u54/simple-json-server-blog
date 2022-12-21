document.forms[0].onsubmit= async function(e){
    e.preventDefault()
    let blog = {
        title:document.getElementById('title').value,
        body:document.getElementById('body').value

    }
    await fetch('http://localhost:3000/blogs',{
        method:"post",
        body:JSON.stringify(blog),
        headers:{'Content-Type':'application/json'}
    })
    window.location.replace('../html/index.html')

}