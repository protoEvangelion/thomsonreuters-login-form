if (document.location.href.indexOf('/team/') !== -1) {
  const breadCrumbNode = document.querySelector('.bread-cumb .container')
  const teamCrumb = breadCrumbNode.querySelector('.post-team-archive')
    .parentNode
  const aboutUsCrumb = teamCrumb.cloneNode(true)
  const pointerNode = document.createElement('span')

  pointerNode.innerText = ' > '

  aboutUsCrumb.firstChild.setAttribute('title', 'Go to About Us.')
  aboutUsCrumb.firstChild.setAttribute('href', '/about-us')
  aboutUsCrumb.querySelector('span').innerText = 'About Us'

  teamCrumb.firstChild.setAttribute('title', 'Go to Our Team.')
  teamCrumb.firstChild.setAttribute('href', '/about-us/our-team/')
  teamCrumb.querySelector('span').innerText = 'Our Team'
  teamCrumb.querySelector('meta').setAttribute('content', 3)

  breadCrumbNode.insertBefore(aboutUsCrumb, teamCrumb)
  breadCrumbNode.insertBefore(pointerNode, teamCrumb)

  breadCrumbNode.classList.add('show')
}
