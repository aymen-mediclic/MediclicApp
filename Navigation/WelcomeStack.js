import { url1 } from "./GlobalUrl"
import { url2 } from "./GlobalUrl"
//put here static data and check is this working
export function getFilmsFromApiWithSearchedText(text) {
  console.log("SEARCH FILTER CALLED ==============")
  try {
     fetch(url1) // comment out this line i just comment this line brother nothing else
    return fetch(url2+'/searchmob?input=' + text)
      .then((response) => response.json())
      .catch((error) => console.error(error, "INSIDE"))
  } catch (error) {
    console.log(error, "====== ON SEARCH ERROR CATCH ========")
  }
}


export function getFilmsFromApiWithSearchedText1 () {
  fetch('http://51.254.39.98:8069/web/login?db=Mediclic')
  const url = 'http://51.254.39.98:8069/test'
  return fetch('http://51.254.39.98:8069/test')
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function fetchLien(text,ch,lng,lat,loc) {
  fetch(url1)
  return fetch(url2 + text+'&lng='+lng+'&lat='+lat+'&location='+loc+'&type_rdv='+ch)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}