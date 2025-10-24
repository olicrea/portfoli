import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img
          className="w-20"
          src="./images/logo-estrategioli.png" 
          alt="Logo"
          style={{ width: '35px', height: '45px' }}
        />
      </a>
      <Navbar />
    </header>
  )
}

