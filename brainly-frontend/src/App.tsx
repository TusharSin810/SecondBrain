import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  
  function hi(){
    alert("Welcome To Second Brain")
  }

  return (
    <div>
      <div className='text-purple-700 flex justify-between px-4 py-2'>
          Brainly - Second Brain App For Storing UseFull Links
        <div className='flex gap-1'>
          <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='md' />} onClick={hi}/>
          <Button variant='secondary' text='Share Link' size='sm' onClick={hi} endIcon={<ShareIcon size='md'/>}/>
        </div> 

      </div>
      <div>
        PlaceHolder Text
      </div>
    </div>
  )
}

export default App
