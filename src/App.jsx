import './App.css'
import { useState } from 'react'

function App() {
  let [sideBarToggleValue, sideBarToggleSetter] = useState(false)

  return (
    <>
      <div className='sidebar' style={{position: 'fixed', top: 0, left: 0, zIndex: 20}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center'}}>
          <button onClick={() => {sideBarToggleSetter(!sideBarToggleValue)}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>
          <h3 style={{margin: 0}}>Dev Apps</h3>
        </div>
        <DevAppsCard open={sideBarToggleValue} />
      </div>
      <div className='hero' style={{margin: 'auto', textAlign: 'center'}}>
        <h1 style={{marginBottom: 4, fontSize: 60}}>Mortality.app</h1>
        <p style={{margin: 0}}>The home for all my projects and services.</p>
      </div>
    </>
  )

}

function DevAppsCard({ open }) {

  const homelabIP = '100.95.204.65'
  // https://console.tailscale.com w/ tailscale icon

  var translateXVal = 0;

  if (!open) {
    translateXVal = -100
  }

  return (
    <>
      <div className='devAppsCard' style={{transform: `translateX(${translateXVal}%)`, transition: 'transform 0.25s ease'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8,  width: '100%'}}>
          <a href={`http://${homelabIP}:8081`} target='_blank' rel='noreferrer' className='btn'>pgAdmin4</a>
          <a href={`https://${homelabIP}:8443`} target='_blank' rel='noreferrer' className='btn'>CraftyController</a>
          <a href={`http://${homelabIP}:81`} target='_blank' rel='noreferrer' className='btn'>Nginx Proxy</a>
          <a href={`https://${homelabIP}:631/`} target='_blank' rel='noreferrer' className='btn'>CUPS Prints</a>
          <a href='http://vault.mortality.app' target='_blank' rel='noreferrer' className='btn'>VaultWarden</a>
        </div>
      </div>
    </>
  )

}

export default App