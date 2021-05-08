const textareaRecommendations = document.querySelector('#recommendations__comments');
textareaRecommendations.addEventListener('input', function (evt) {
   evt.target.style.height = 'auto'
   evt.target.style.height = evt.target.scrollHeight + 2 + "px"
})