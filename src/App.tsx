
import {
  Hero,
  Header,
  Button,
  Skills,
  Form,
  CardProject,
  Footer
} from './components/index'


function App() {

  return (
    <main className='w-[375px] m-auto'>
      <section className='bg-Navy-800 p-6 h-[450px] relative'>
        <Header />
        <div className="w-fit mx-auto mt-6 p-2 border-2 border-LightMint rounded-full">
          <img
            className="rounded-full size-45"
            src="/images/foto-perfil.jpeg"
            alt="rostro"
          />
        </div>
        <img
          className="absolute -bottom-0 left-0"
          src="/images/bg-curvy-mobile.svg"
          alt="background curvy mobile" />
      </section>
      <section className='bg-Navy-900 p-6 mb-20'>
        <Hero />
        <div className='mt-9 text-center'>
          <Button text='Linkedin' styles='w-[140px]' url='https://www.linkedin.com/in/olimarduarte/' />
        </div>
      </section>
      <section className='bg-Navy-900 mb-70'>
        <CardProject />
        <Skills />
      </section>
      <section className='bg-Navy-800 p-4'>
        <Form />
      </section>
      <section className=''>
        <Footer />
      </section>
    </main>
  )
}

export default App
