const nav = document.querySelector('nav')
const page = document.currentScript.getAttribute('page')

nav.innerHTML = `
  <div class="container">
    <ul class="nav">
      <li><a href="https://paalss.github.io/portfolio/" class="index">Hjem</a></li>
      <li><a href="#">Nettsider</a>
        <ul class="website-links">
          <li><a href="https://paalss.github.io/portfolio/webWork/rankingapp.html">Ranking app</a></li>
          <li><a href="https://paalss.github.io/portfolio/webWork/videoopplasting.html">Videoopplastingssystemer</a></li>
          <li><a href="https://paalss.github.io/portfolio/webWork/maclean.html">Alistair Maclean nettside redesign</a></li>
        </ul>
      </li>
      <li><a href="/portfolio" class="fritid">Kunst</a></li>
    </ul>
  </div>
`

var openLiAnchor
if (page == 'index') {
  openLiAnchor = nav.querySelector('.index')
} else if (page == 'fritid') {
  openLiAnchor = nav.querySelector('.fritid')
} else {
  var pageListPlace = document.currentScript.getAttribute('pageListPlace')
  openLiAnchor = nav.querySelector(`ul.website-links li:nth-child(${pageListPlace})`).querySelector('a')
}
// openLiAnchor er den <a> lenken som samsvarer med den siden du har åpen. Gi denne <a> en class slik at CSS kan utheve den
openLiAnchor.classList.add('open')

