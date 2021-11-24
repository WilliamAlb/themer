const Button = ({text, onClick, color}) => {
  return <><button id="myId" style={{backgroundColor: color}} onClick={() => onClick("click test")}>{text}</button><div data-testid="my-special-button">im a buTtOn</div></>
}

export default Button