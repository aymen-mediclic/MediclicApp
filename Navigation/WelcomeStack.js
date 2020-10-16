import { url1 } from "./GlobalUrl"
import { url2 } from "./GlobalUrl"
// fetch utilisé dans la page de recherrche(searbarscreen.js)
export function getFilmsFromApiWithSearchedText(text) {
  console.log("SEARCH FILTER CALLED ==============")
  try {
     fetch(url1) 
    return fetch(url2+'/searchmob?input=' + text)
      .then((response) => response.json())
      .catch((error) => console.error(error, "INSIDE"))
  } catch (error) {
    console.log(error, "====== ON SEARCH ERROR CATCH ========")
  }
}
//fetch utilisé dans la page de Résultats(listeMed.js)
export function fetchLien(text,ch,lng,lat,loc) {
  fetch(url1)
  return fetch(url2 + text+'&lng='+lng+'&lat='+lat+'&location='+loc+'&type_rdv='+ch)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}