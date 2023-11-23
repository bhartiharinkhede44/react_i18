import langconfi from "./lang.json"
const I18n  = (Keyword)=> {

    const lang = localStorage.getItem('lang') || 'en'

  return langconfi[lang][Keyword]
}

export default I18n