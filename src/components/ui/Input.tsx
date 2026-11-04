
type InputType = 
{
    icons: React.ReactNode;
    textPlaceholder: string;
    className: string;

}
const Input = ({icons, textPlaceholder, className = ""}: InputType) => {
  return (
    <div style={{border: "var(--border-style-inputs)"}}  className={className}>
        <div className="icons">
        {icons}
        </div>
        <input type="text" placeholder={textPlaceholder} className="flex flex-2   bg-transparent focus:outline-none focus:ring-0"/>
    </div>
  )
}

export default Input