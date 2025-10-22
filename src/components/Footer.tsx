

export const Footer = () => {
  return (
    <footer className="mt-05 pt-15 pb-30 px-6 bg-Navy-800">
        <div className="border-t border-LightBlue p-6">
            <img className="mt-10 mb-10" src="/images/logo-estrategioli.png" alt="logo" style={{ width: '35px', height: '45px' }}/>
            <div className="flex items-start gap-6 mb-2">
                <img src="/images/icon-location.svg" alt="location" />
                <p>Santiago de Chile</p>
            </div>
            <div className="flex items-start gap-6">
                <img className="mt-1" src="/images/icon-email.svg" alt="email" />
                <p>olimarduarte@estrategioli.com</p>
            </div>
        </div>
    </footer>
  )
}
