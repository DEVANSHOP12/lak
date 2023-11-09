 document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here

    // Function to replace the links in the table
    function replaceLinks() {
      const table = document.getElementById('myTable');
      const rows = table.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const linkButtons = row.getElementsByClassName('btn');
        for (let j = 0; j < linkButtons.length; j++) {
          const button = linkButtons[j];
          const currentLink = button.getAttribute('onclick');
          if (currentLink.includes('https://xyz1234xd.blogspot.com/p/player.html')) {
            const newLink = currentLink.replace(
              'https://xyz1234xd.blogspot.com/p/player.html',
              'https://devanshop12.github.io/lak/player.html'
            );
            button.setAttribute('onclick', newLink);
          }
        }
      }
    }
  
    // Call the function to replace links when the page loads
    window.onload = replaceLinks();
console.log("bhai mai jinda hu ")

     });



  
  
