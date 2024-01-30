function generatePassword() {
    var nr_letters = document.getElementById('letters').value;
    var nr_symbols = document.getElementById('symbols').value;
    var nr_numbers = document.getElementById('numbers').value;

    
    // Validate input values
    if (nr_letters === '' || nr_symbols === '' || nr_numbers === '') {
        
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter valid Password Length.'
        });
        
        return;
    }

    // Additional validation for numeric values
    if (isNaN(nr_letters) || isNaN(nr_symbols) || isNaN(nr_numbers) || nr_letters < 0 || nr_symbols < 0 || nr_numbers < 0) {
                
        Swal.fire({
            icon: 'error',
            title: 'Invalid Length',
            text: 'Please enter a valid Password length'
        });
        return;
    }
    
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
    
    
   // Change the color of the copy button
   var copyButton = document.getElementById('copiedText');
   copyButton.style.backgroundColor = '#465765'; // You can change the color code as needed
   copyButton.innerText = "Copied";

    
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
    
    Swal.fire({
        icon: 'success',
        title: 'Password copied successfully',
        showConfirmButton: false,
        timer: 1500
    });
  
     

}

