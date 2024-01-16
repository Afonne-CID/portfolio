
import { useState } from "react";
import auditorical_logo from '/auditorical.svg';
import github_logo from './assets/github_logo.svg';
import x_logo from './assets/x_twitter_logo.svg';
import headshot from './assets/cee_eye_d.svg';
import verifyDark from './assets/verify_dark.svg';
import verifyLight from './assets/verify_light.svg';
import Widget from './Widget';
import TextArea from './TextArea';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const bgColor = isDarkMode ? '#3db36c' : '#dce3de'
  const moonColor = isDarkMode ? '#92e0a7' : '#3db36c'

  return (
    <div className={`relative bg-[${bgColor}]`}>
      {/* Moon Icon */}
      <FontAwesomeIcon
        className={`absolute top-[5%] right-[5%] cursor-pointer ${isDarkMode ? 'scale-x-[-1]' : ''}`}
        icon={faMoon}
        color={moonColor}
        size="3x"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Content */}
      <div className={`flex flex-col p-2 font-mono text-[26px] items-center justify-center min-h-screen`}>
        <div className='flex justify-center items-center flex-col'>

          <img className='w-[300px] h-[250px]' src={headshot} alt="Hi 👋, I'm CID" />

          <div className='flex flex-col justify-center'>
              <div className='flex flex-row'>
                <h1 className='py-2 pl-2 hover:font-serif'>Hi 👋, I'm CID</h1>
                <img className='p-2 w-[60px] h-[60px]' src={isDarkMode ? verifyDark : verifyLight} alt="verification batch" />
              </div>

              <TextArea info="I write fullstack solutions... with a Python backend
                    &#123;Django, Flask&#125; and JavaScript frontend &lt;React /&gt;.
              " />

          </div>
        </div>
        <div className='flex mt-2 w-screen items-center justify-center md:justify-around flex-col md:flex-row'>
          <Widget img={auditorical_logo} info={'blog'} link="https://auditorical.com/blog"  />
          <Widget img={github_logo} info={'github'} link="https://github.com/afonne-cid" />
          <Widget img={x_logo} info={'x'} link="https://x.com/cee_eye_d" />
        </div>
      </div>
    </div>
  );
}

export default App;
