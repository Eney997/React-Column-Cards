import './App.css'
import {info}  from './cardebi';
import Card from './components/card/card'

function App() {
  
  return (
    <>
    <div className='grid'>
      {info.map((x , i) => (
      <Card
      key={i}
      imgUrl={x.imgUrl}
      name={x.name}
      desc={x.desc}
      but={x.but}
      span={x.span}
      background={x.background}
      />
      ))}
    </div>
    </>
  )
}

export default App
