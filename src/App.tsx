import { useState } from "react"
import auditorical_logo from '/auditorical.svg'
import github_logo from './assets/github_logo.svg'
import x_logo from './assets/x_twitter_logo.svg'
import headshot from './assets/cee_eye_d.svg'
import verification from './assets/verification.svg'
import Widget from './Widget'
import TextArea from './TextArea'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

import './main.css'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <>
      <div className={`flex flex-col p-2 font-mono text-[26px] items-center justify-center h-screen w-screen bg-[${isDarkMode ? '#3db36c' : '#dce3de'}]`}>

        {/* Toggle dark mode */}
        <div
              className={`flex
                  rounded-full
                  border-[#dce3de]
                  w-[160px]
                  h-[60px]
                  justify-end
              `}
              onClick={() => setIsDarkMode(!isDarkMode)}
          >
              <FontAwesomeIcon 
                  className={`p-2 w-[100%] h-[100%] ${isDarkMode ? 'justify-left items-start scale-x-[-1]' : 'justify-right items-end'}`} 
                  icon={faMoon} color={isDarkMode ? '#dce3de' : '#3db36c'} 
                  size="2x" 
              />
          </div>

        <div className='flex flex-row'>

          <img className='w-[300px] h-[250px]' src={headshot} alt="Hi 👋, I'm CID" />

          <div className='flex flex-col justify-center'>
              <div className='flex flex-row'>
                <h1 className='py-2 hover:font-serif'>Hi 👋, I'm CID</h1>
                <img className='p-2 w-[56px] h-[56px]' src={verification} alt="verification batch" />
              </div>

              <TextArea info="I write fullstack solutions... with a Python backend
                    &#123;Django, Flask&#125; and JavaScript frontend &lt;React /&gt;.
              " />

          </div>


        </div>
        <div className='flex w-screen items-center justify-center md:justify-around flex-col md:flex-row'>

          <Widget img={auditorical_logo} info={'blog'} link="https://auditorical.com/blog"  />
          <Widget img={github_logo} info={'github'} link="https://github.com/afonne-cid" />
          <Widget img={x_logo} info={'x'} link="https://x.com/cee_eye_d" />

        </div>
      </div>
    </>
  )
}



export default App
