
export function getFilmsFromApiWithSearchedText(text) {
  fetch('http://51.91.249.185:8069/web/login?db=new_installation')
  return fetch('http://51.91.249.185:8069/searchmob?input=' + text)
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
  fetch('http://51.91.249.185:8069/web/login?db=new_installation')
  return fetch('http://51.91.249.185:8069' + text+'&lng=7.6353386&lat=33.5912796&location=119 Boulevard Abdelmoumen, Casablanca, Maroc&type_rdv=C')
    .then((response) => response.json())
    .catch((error) => console.error(error))
}