
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
]


const mainEl = document.querySelector('main')
const h1El = document.createElement('h1')
const topMenuEl = document.querySelector('#top-menu')
const subMenuEl = document.querySelector('#sub-menu')

mainEl.style.backgroundColor = 'var(--main-bg)'
h1El.innerText = 'SEI Rocks!'
mainEl.appendChild(h1El)
mainEl.setAttribute('class', 'flex-ctr')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.setAttribute('class', 'flex-around')

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.setAttribute('class', 'flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Iterate over the entire menuLinks array and for each "link" object:



menuLinks.forEach(function(link) {
  
  // Create an <a> element.
  const aEl = document.createElement('a')
  
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aEl.setAttribute('href', link.href)
  
  // Set the new element's content to the value of the text property of the "link" object.
  aEl.textContent = link.text

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aEl)

})

let topMenuLinks = document.querySelectorAll('#top-menu a')
let showingSubMenu = false

  topMenuEl.addEventListener('click', function(e){
    e.preventDefault()
    //e.target
    if(e.target.tagName !== 'A') return
    console.log(e.target.textContent)
    
    // 5.3
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = '0'
      return
    }

     //5.4
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active')
    })

     //5.5
    e.target.setAttribute('class', 'active')
      
     //5.6 -- 
    const data = menuLinks.find(function(object){
      return object.text === e.target.textContent 
    })
    showingSubMenu = 'subLinks' in data

    //5.7
    if (showingSubMenu) {
      buildSubMenu(data.subLinks)
      subMenuEl.style.top = '100%'
    } else {
      subMenuEl.style.top = '0'
      mainEl.innerHTML = '<h1>about</h1>'
    }
  })

    // 5.8
    function buildSubMenu(subLinks) {
      subMenuEl.innerHTML = ''
      subLinks.forEach(function(subLink){
        const aEl = document.createElement('a')
        aEl.setAttribute('href', subLink.href)
        aEl.textContent = subLink.text
        subMenuEl.appendChild(aEl)
    })
  }

  // 6.0
  subMenuEl.addEventListener('click', function(e) {
    e.preventDefault()
    if (e.target.tagName !== 'A') {
      return
    }
    console.log(e.target.textContent)

    // 6.1
    showingSubMenu = false
    subMenuEl.style.top = '0'

    // 6.2
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active')
    })

    //6.3
    h1El.innerHTML = e.target.textContent
  })