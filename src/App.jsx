import './App.css'
import PortalRow from './PortalRow'
import PortalButton from './PortalButton'

function App() {
  const homelabIP = '100.95.204.65'
  const placeholderIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#000000"><path d="M5,21q-0.83,0-1.41-0.59T3,19V5Q3,4.17 3.59,3.59T5,3H19q0.83,0 1.41,0.59T21,5V19q0,0.82-0.59,1.41T19,21H5Zm0-2H19V5H5V19Zm1-2H18l-3.75-5l-3,4L9,13L6,17ZM5,19V5V19Z"/></svg>
  var tools = [
    <PortalButton icon='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/pgadmin.svg' 
        title='pgAdmin4' body='Postgres Admin Manager' link={`http://${homelabIP}:8081`} restricted={true}/>,
    <PortalButton icon='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/crafty-controller.svg' 
        title='Crafty Controller' body='Minecraft Server Manager' link={`https://${homelabIP}:8443`} restricted={true}/>,
    <PortalButton icon='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nginx-proxy-manager.svg' 
        title='Nginx Proxy' body='Proxy & Routing Manager' link={`http://${homelabIP}:81`} restricted={true}/>,
    <PortalButton icon='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/cups.svg' 
        title='CUPS Prints' body='Print Server' link={`https://${homelabIP}:631`} restricted={true}/>
  ]

  var services = [
    <PortalButton icon='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vaultwarden.svg' 
        title='VaultWarden' body='Password & Docs' link='http://vault.mortality.app' restricted={true}/>]

  var projects = [
    <PortalButton icon={placeholderIcon} 
        title='Fizzwick' body='Mocktail & Drinks Webapp' link='https://fizzwick.mortality.app/'/>]

  return (
    <>
      <div className='hero'>
        <h1>Mortality.app</h1>
        <p>Portal for all my projects, pages and services.</p>
      </div>
      <PortalRow portals={tools} title="Tools" />
      <PortalRow portals={services} title="Services" />
      <PortalRow portals={projects} title="Projects" />
    </>
  )

}



export default App