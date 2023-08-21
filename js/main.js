// viewSwap function
const $topScorersView = document.querySelector('.top-scorers');
const $teamStandingsview = document.querySelector('.standings-table');
function viewSwap(string) {
  if (string === 'top-scorers') {
    $topScorersView.setAttribute('class', 'top-scorers');
    $teamStandingsview.setAttribute('class', 'hidden');
    $purpleTabName.textContent = 'Top Scorers';
    $headerSpace.setAttribute('class', 'header-space-mobile');
    $premierImg.setAttribute('class', 'premier-img-mobile');
    $premierTitle.setAttribute('class', 'premier-title-mobile');
  } else if (string === 'standings-table') {
    $topScorersView.setAttribute('class', 'hidden');
    $teamStandingsview.setAttribute('class', 'standings-table');
    $purpleTabName.textContent = 'Standings';
    $headerSpace.setAttribute('class', 'header-space');
    $premierImg.setAttribute('class', 'premier-img');
    $premierTitle.setAttribute('class', 'premier-title');
  }
  data.view = string;
}
viewSwap();
const $purpleTabName = document.querySelector('.purple-tab-title');
const $headerSpace = document.querySelector('.header-space');
const $premierImg = document.querySelector('.premier-img');
const $premierTitle = document.querySelector('.premier-title');

// Anchor for when Standings is clicked
const $standingsAnchor = document.querySelector('.standings-anchor');
function eventHandlerStandings() {
  viewSwap('standings-table');
}
$standingsAnchor.addEventListener('click', eventHandlerStandings);

// Anchor for when Top Scorers is clicked
const $topScorersAnchor = document.querySelector('.top-scorers-anchor');
function eventHandlerTopScorers() {
  viewSwap('top-scorers');
}
$topScorersAnchor.addEventListener('click', eventHandlerTopScorers);
