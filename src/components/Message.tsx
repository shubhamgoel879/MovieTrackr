
const abc = ():void => {
    console.log('hello')
}

function Message() {
  return (
    <button onClick={abc}>Hello</button>
  )
}

export default Message