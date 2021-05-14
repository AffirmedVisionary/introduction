const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    top: '115em',
    border: 4,
    left: '30em',
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#242058')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    border: 4,
    top: '150em',
    left: '65em',
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#242058')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
