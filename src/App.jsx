import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import data from './components/DATA/dataCard.json'
import sound from './assets/tink.wav'
import snarp from './assets/snare.wav'
import ride from './assets/ride.wav'

function App() {

  const [dataLists, setDataLists] = useState(data.sort(() => Math.random() - 0.5))
  const [previewCard, setPreviewCard] = useState(-1)

  const selecteCard = index => {
    dataLists[index].status = "selected"
    setDataLists([...dataLists])
    if (previewCard === -1) {
      setPreviewCard(index)
    } else {
      valideteCard(index)
      const audio = new Audio(sound);
      audio.play();
    }
  }

  const valideteCard = (newIndexCard) => {
    setTimeout(() => {
      if (dataLists[previewCard].name === dataLists[newIndexCard].name) {
        dataLists[previewCard].status = "up"
        dataLists[newIndexCard].status = "up"
        const audio2 = new Audio(snarp)
        audio2.play()
      } else {
        dataLists[previewCard].status = "down"
        dataLists[newIndexCard].status = "down"
        const audio3 = new Audio(ride)
        audio3.play()
      }
      setDataLists([...dataLists])
      setPreviewCard(-1)
    }, 300);
  }

  // const playsound = () => {
  //   const audio = new Audio(sound);
  //   audio.play();
  // }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className='Card-container'>
        {
          dataLists?.map((datalist, i) => (
            <Cards datalist={datalist}
              i={i}
              key={datalist.id}
              selecteCard={selecteCard}
            />
          ))
        }
      </div>
      {/* <button onClick={playsound}>holaaaa</button> */}
    </div>
  )
}

export default App
