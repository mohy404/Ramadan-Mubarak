window.onload = function() {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        
        // Check if the name arbic or not exists (validation)
        if (!/^[أ-ي\s]+$/g.test(name)) {
            displayMessage('مش هينفع والله يابيه، اكتب اسمك بالعربي 🚫', true);
        } else {
            displayMessage(`كل سنة وأنت طيب وبخير وينعاد عليك باليمن والبركات يا ${name} 🎉`);
        }
    });
};

function displayMessage(message, isError = false) {
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.innerHTML = message;
    greetingMessage.style.color = isError ? 'red' : ''; 
    greetingMessage.classList.remove("messageEffect"); 
    greetingMessage.classList.add("messageEffectFadeInScale"); 
}
