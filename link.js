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
          if (currentLink.includes('https://lakpaid.blogspot.com/p/player-page.html')) {
            const newLink = currentLink.replace(
              'https://lakpaid.blogspot.com/p/player-page.html',
              'https://devanshop12.github.io/lak/player.html'
            );
            button.setAttribute('onclick', newLink);
          }
        }
      }
    }
  
    // Call the function to replace links when the page loads
    window.onload = replaceLinks;

console.log("bhai mai jinda hu ")
