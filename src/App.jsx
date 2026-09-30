import './App.css'

function App() {

  return (
    <>
      <div className='mainCard' style={{width: '25%'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 26}}>
          <h1 style={{margin: 0}}>Access my dev apps</h1>
          <p style={{margin: 0}}>All require a <a className='tailscale' href='https://console.tailscale.com'>TailScale</a> connection</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '150px'}}>
          <a href='http://100.95.204.65:8081' target='_blank' rel='noreferrer' className='btn'>pgAdmin4</a>
          <a href='https://100.95.204.65:8443' target='_blank' rel='noreferrer' className='btn'>CraftyController</a>
          <a href='http://100.95.204.65:81' target='_blank' rel='noreferrer' className='btn'>Nginx Proxy</a>
          <a href='http://vault.mortality.app' target='_blank' rel='noreferrer' className='btn'>VaultWarden</a>
        </div>
      </div>
    </>
  )

}

export default App
