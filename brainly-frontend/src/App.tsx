import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  
  function hi(){
    console.log("Hello There")
  }

  return (
    <>
      <div className='text-purple-700'>
          Brainly - Second Brain App 
        <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='md' />} onClick={hi}/>
        <Button variant='secondary' text='Share Link' size='md' onClick={hi}/>
      </div>
    </>
  )
}

export default App
