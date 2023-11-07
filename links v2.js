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

  // Function to shorten a URL using the https://tnshort.net API
  async function shortenURL(url) {
    const apiEndpoint = "https://tnshort.net/api?api=9125d560a0a9cf40622a805f6d0282a605da2e4d&url="; // Replace YOUR_API_KEY with your actual API key

    try {
      const response = await fetch(apiEndpoint + encodeURIComponent(url));
      const data = await response.json();

      if (data.shortenedUrl) {
        return data.shortenedUrl;
      }
    } catch (error) {
      console.error("Error fetching short link:", error);
    }

    return url; // Return the original URL if shortening fails
  }

  // Function to replace old links with new links, preserve query parameters, and then shorten the resulting link
  async function replaceAndShortenLinks() {
    const oldLink = "https://xyz1234xd.blogspot.com/p/player.html";
    const newLink = "https://devanshop12.github.io/lak/player.html";

    // Select all elements with an onclick attribute
    const elements = document.querySelectorAll('[onclick]');

    // Loop through the selected elements
    for (const element of elements) {
      const onclickAttribute = element.getAttribute('onclick');

      // Check if the onclick attribute contains the oldLink
      if (onclickAttribute.includes(oldLink)) {
        // Extract the query parameters from the old link
        const queryParameters = onclickAttribute.split(oldLink)[1];

        // Build the new URL with the query parameters
        const newURL = newLink + queryParameters;

        // Shorten the new URL
        const shortNewLink = await shortenURL(newURL);

        // Replace the entire onclick attribute value with the shortened URL
        element.setAttribute('onclick', `window.location.href='${shortNewLink}'`);
      }
    }
  }

  // Determine the value of condi and execute the corresponding logic
  var condi = "ads"; // Change this to "ads" if needed
  if (condi === "free") {
    // Run the code to replace links in the table
    window.onload = replaceLinks;
  } else if (condi === "ads") {
    // Run the code to replace and shorten links in the onclick attributes
    replaceAndShortenLinks();
  }




});
