
export function getFilmsFromApiWithSearchedText(text) {
  fetch('http://54.37.228.205:8069/web/login?db=prise_rdv_185')
  return fetch('http://54.37.228.205:8069/searchmob?input=' + text)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getFilmsFromApiWithSearchedText1 () {
  fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
  const url = 'http://51.254.39.98:8069/test'
  return fetch('http://51.254.39.98:8069/test')
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function fetchLien(text) {
  fetch('http://54.37.228.205:8069/web/login?db=prise_rdv_185')
  return fetch('http://54.37.228.205:8069' + text)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}