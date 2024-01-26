
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
const h1El = document.createElement('h1')
h1El.innerText = 'SEI Rocks!'
mainEl.appendChild(h1El)
mainEl.setAttribute('class', 'flex-ctr')

const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute('class', 'flex-around')

// Iterate over the entire menuLinks array and for each "link" object:



menuLinks.forEach(function(link) {
  
  // Create an <a> element.
  const aEl = document.createElement('a')
  
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aEl.innerText = link.text;

  // Set the new element's content to the value of the text property of the "link" object.
  aEl.setAttribute('href', 'link.href')

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aEl)

})




