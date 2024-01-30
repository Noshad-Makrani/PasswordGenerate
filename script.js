function generatePassword() {
    var nr_letters = document.getElementById('letters').value;
    var nr_symbols = document.getElementById('symbols').value;
    var nr_numbers = document.getElementById('numbers').value;

    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbols = '!#$%&()*+';
    var numbers = '0123456789';

    var passwordList = [];

    for (var i = 0; i < nr_letters; i++) {
        passwordList.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }

    for (var j = 0; j < nr_symbols; j++) {
        passwordList.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
    }

    for (var k = 0; k < nr_numbers; k++) {
        passwordList.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
    }

    passwordList.sort(() => Math.random() - 0.5);

    var password = passwordList.join('');
    document.getElementById('modalPassword').innerText =  password;
    openModal();
}

function openModal() {
    document.getElementById('passwordModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('passwordModal').style.display = 'none';
    location.reload();

}



function copyText() {
    // Get the text from the output element
    var textToCopy = document.getElementById('modalPassword').innerText;

    var copiedText = document.getElementById('copiedText');
    copiedText.innerText = "Copied";
    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

}





// function myFunction() {
//     // Get the text field
//     var copyText = document.getElementById("modalPassword").innerText;
  
//     var copiedtextValue = document.getElementById("copiedText");
//     copiedtextValue.innerText = "copied text"; 
    
//     // Alert the copied text
//   }


// var closebtns = document.getElementsByClassName("close");
// var i;

// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//     this.parentElement.style.display = 'none';
//   });
// }



// function generatePassword() {
//     var nr_letters = document.getElementById('letters').value;
//     var nr_symbols = document.getElementById('symbols').value;
//     var nr_numbers = document.getElementById('numbers').value;

//     var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var symbols = '!#$%&()*+';
//     var numbers = '0123456789';

//     var passwordList = [];

//     for (var i = 0; i < nr_letters; i++) {
//         passwordList.push(letters.charAt(Math.floor(Math.random() * letters.length)));
//     }

//     for (var j = 0; j < nr_symbols; j++) {
//         passwordList.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
//     }

//     for (var k = 0; k < nr_numbers; k++) {
//         passwordList.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
//     }

//     passwordList.sort(() => Math.random() - 0.5);

//     var password = passwordList.join('');
//     document.getElementById('modalPassword').innerText = 'Your password is ' + password;
//     openModal();
// }

// function openModal() {
//     var passwordModal = document.getElementById('passwordModal');
//     passwordModal.style.display = 'block';

//     // Add a click event listener to the modal overlay for closing
//     document.addEventListener('click', closeModalOverlay);
// }

// function closeModal() {
//     var passwordModal = document.getElementById('passwordModal');
//     passwordModal.style.display = 'none';

//     // Remove the click event listener when closing the modal
//     document.removeEventListener('click', closeModalOverlay);
// }

// function closeModalOverlay(event) {
//     // Check if the click is outside the modal, then close it
//     var passwordModal = document.getElementById('passwordModal');
//     if (!passwordModal.contains(event.target)) {
//         closeModal();
//     }
// }

// // Attach closeModal function to the close button
// var closeButton = document.querySelector('.close');
// if (closeButton) {
//     closeButton.addEventListener('click', closeModal);
// }


