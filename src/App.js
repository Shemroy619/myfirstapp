function App(props) {
  const currDate = new Date ();

  return (
    <div>
      <h1>Hello World</h1>
      <h1> Teron Coppin </h1>
      <h2> Teron dada is a super star and his name is king Tony </h2>
      <h2> Today is {currDate.toLocaleDateString()} and the time is {currDate.toLocaleTimeString()}</h2>
    </div>
    
    );
}


export default App;