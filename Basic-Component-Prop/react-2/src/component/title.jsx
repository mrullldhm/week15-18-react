const Title = (props) => {
  // const name = "I am Amirul";
  // const role = "Full Stack Web Development";
  const style = {
    color: "green",
    border: "2px solid black",
    padding: "1rem",
    borderRadius: "1rem",
  };

  props.meow?.();
  
  return (
    <div style={style}>
      <p>{props.name}</p>
      <p>{props.role}</p>
      {
        props.isEngineer && <p>I am a engineer</p>
      }
    </div>  
  )
}

export default Title