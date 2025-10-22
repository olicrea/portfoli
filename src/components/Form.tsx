import { Button } from "./Button"

export const Form = () => {
  return (
    <div className="bg-gray-200 items-center text-center rounded-3xl p-6 -mt-65">
        <h3 className="font-Raleway font-bold mb-2 text-Navy-850">Hablemos</h3>
        <p className="text-Navy-850 text-sm mb-2">¿Tienes alguna pregunta o comentario? ¡Déjame tu mensaje!</p>
        <form className="flex flex-col gap-4" action="">
            <textarea
            placeholder="Escribe aquí"
            className="bg-Navy-850 rounded-3xl placeholder:text-gray-400 text-center h-50 p-5" 
            />
            <Button text="Enviar" url="#" />
        </form>
    </div>
  )
}
