// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    // Create a new <nav> element
    var nav = document.createElement("nav");
    var ul = document.createElement("ul");
  
    // Define the navigation links
    var links = [
      { text: "Home", href: "index.html" },
      { text: "About", href: "about.html" },
      { text: "Novels", href: "novels.html" },
      { text: "Chapters", href: "chapters.php" },
      { text: "Contact", href: "contact.html" },
    ];
  
    // Populate the navigation links
    links.forEach(function (link) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    // Append the navigation links to the <nav> element
    nav.appendChild(ul);
  
    // Insert the <nav> element before the main content
    var main = document.querySelector("main");
    main.parentNode.insertBefore(nav, main);
  });
  