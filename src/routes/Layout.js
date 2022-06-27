import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div style={{ background: 'red', height: '50px', position: 'fixed', width: '100%' }}>
        Header
      </div>
      <Outlet />
    </>
  )
}

export default Layout