
import './App.css'
import ImageComponent from './components/ImageComponent'
import TextSection from './components/textSection'



function App() {


  return (
    <div className='main' >

      <ImageComponent img='space1.jpg' />
      <TextSection />
      <ImageComponent img='space2.jpg' />
      <TextSection />
      <ImageComponent img='space3.jpg' />

    </div>



  )
}

export default App
