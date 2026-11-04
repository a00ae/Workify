
type InputType = 
{
    icons: React.ReactNode;
    textPlaceholder: string;

}
const Input = ({icons, textPlaceholder}: InputType) => {
  return (
    <div style={{border: "var(--border-style-inputs)"}}  className="!p-2 w-[90%]  flex gap-1 items-center bg-(--bg-login) rounded-md">
        <div className="icons">
        {icons}
        </div>
        <input type="text" placeholder={textPlaceholder} className="flex flex-2   bg-transparent focus:outline-none focus:ring-0"/>
    </div>
  )
}

export default Input