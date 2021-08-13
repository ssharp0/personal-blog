// check if connected
console.log('connected!');

document.getElementById('addPost').addEventListener('click',event => {
 event.preventDefault()

 let postTitle = document.getElementById('postTitle').value
 let postContent = document.getElementById('postContent').value
 let imageLink = document.getElementById('imageLink').value

 let userInput = document.createElement('li')
 userInput.className = "notLiked"
 userInput.innerHTML = `
 <button class="isLiked">😁</button>
 <button class="delete">x</button>
 <hr>
 <h2>Blog Title: ${postTitle}</h2>
 <p>${postContent}</p>
 <img src="${imageLink}" alt="No Image Posted"></img>
 `

 document.getElementById('posts').append(userInput)

 document.getElementById('postTitle').value = ''
 document.getElementById('postContent').value = ''
 document.getElementById('imageLink').value = ''

})

document.addEventListener('click', event => {

 // for class delete will remove from the list
 if (event.target.className === 'delete') {
  event.target.parentNode.remove()
  // if class contains isLiked...(the emoji mark clicked)
 } else if (event.target.classList.contains('isLiked')) {
  // if class contains notLiked... then remove notLiked and add isLiked for sytling
  if (event.target.parentNode.classList.contains('notLiked')) {
   event.target.parentNode.classList.remove('notLiked')
   event.target.parentNode.classList.add('isLiked')
   // otherwise/else remove isLiked and add notLiked for sytling
  } else {
   event.target.parentNode.classList.remove('isLiked')
   event.target.parentNode.classList.add('notLiked')
  }
 }
})
