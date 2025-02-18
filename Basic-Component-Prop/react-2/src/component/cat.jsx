const Cat = () => {
    const catName = "I am Meow";
    const catRole = "Meow Meoww Meowww";
    const style = {
      color: "green",
      border: "2px solid black",
      padding: "1rem",
      borderRadius: "1rem",
    };
    
    return (
      <div style={style}>
        <p>{catName}</p>
        <p>{catRole}</p>
      </div>  
    )
  }
  
  export default Cat