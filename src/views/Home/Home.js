import React from 'react'
import "./Home.css"
import I18n from '../../utils/i18n'

function Home() {
    const users = 15;
  return (
    <div>
     
    <div className='main-container'>
      <h2 className='heading'>{I18n("topic")}</h2>
      <p className='text'>{I18n("text")}</p>
    </div>

    <div className='lang-contain'>
      <select
        defaultValue={localStorage.getItem('lang')}
        onChange={(e) => {
          localStorage.setItem('lang', e.target.value)
          window.location.reload()
        }}>
        <option value="en">ENGLISH</option>
        <option value="mr">MARATHI</option>
        <option value="hi">HINDI</option>
      </select>
    </div>
  </div>
  )
}

export default Home
