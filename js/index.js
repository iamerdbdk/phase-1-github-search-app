var form = document.getElementById("github-form")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join(' ')

    document.getElementById("result").innerHTML = originalName

    alert(originalName)

    fetch("https;//api.github.com/users/"+originalName)
    .then(() => result.json())
    .then((data) => {
    console.log(data)


    document.getElementById("result").innerHTML = '< a target="_blank" href="https://www.github.com/${originalName}"> <img src= "${data.avatar_url}'
    
    })

})


