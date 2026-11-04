

type ButtonType = {
    text: string | React.ReactNode;
    className:string;
}

const Button = ({text, className =""}: ButtonType) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Button