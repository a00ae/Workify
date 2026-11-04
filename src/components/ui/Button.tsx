

type ButtonType = {
    text: string;
}

const Button = ({text}: ButtonType) => {
  return (
    <button className="w-[90%] !p-1 bg-orange-800 rounded-sm text-sm">{text}</button>
  )
}

export default Button