

function Buttonz(props) {
    const {children = "...", variant="bg-black", onClick, type="button"} = props;
    return (
      <button className={`${variant} text-white px-4 py-3 rounded-xl`} type={type} onClick={onClick} >{children}</button>
    )
}

export default Buttonz;