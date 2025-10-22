interface ButtonProps {
    text: string;
    styles?: string;
    url: string;
}

export const Button = ({ text, styles='', url='' }: ButtonProps) => {
  return (
    <a href={url} className={`font-semibold rounded-3xl text-Navy-800 text-bold bg-linear-to-b from-LightLavender to-LightBlue hover:to-LightPeach cursor-pointer p-3 ${styles}`}>
      {text}
    </a>
  )
}
