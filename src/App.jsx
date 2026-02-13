
import './App.css'
import pads from '../public/pads'
function App() {

const [pads, setPads] = useState(pads)
  
    
    
    const buttonElements = pads.map(pad => (
                
                  <button key={pad.id} style={{backgroundColor: pad.color}}></button>
    ))
    
  return (
      (
        <main>
             <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
  )
    
  
}

export default App
