
import logo from "../../../public/ableton-hallmark.ef5355379032.svg"


const Footer = () => {
  return (
    <div className="w-full ml-10 border-t-6 border-slate-200">
      <div>
        <h1>Ableton</h1>
      </div>
      <div>
        <h2>Sign up to our newsletter</h2>
        <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
      </div>
      <div>
        <input type="text" placeholder="Email Address" />
        <button>Sign up</button>
      </div>
      <div>
        <p>Register Live or Push</p>
        <p>About Ableton</p>
        <p>Jobs</p>
      </div>
      <div>
        <div>fb</div>
        <div>twt</div>
        <div>yt</div>
        <div>insta</div>
      </div>
      <div>
        <h2>Education</h2>
        <p>Offers for students and teachers</p>
        <p>Ableton for the Classroom</p>
        <p>Ableton for Colleges and Universities</p>
      </div>
      <div>
        <h2>Community</h2>
        <p>Find Ableton User Groups</p>
        <p>Find Certified Training</p>
        <p>Become a Certified Trainer</p>
      </div>
      <div>
        <h2>Language and Location</h2>
        
      </div>
      <div>
        <p>Contact Us</p>
        <p>Press Resources</p>
        <p>Legal Info</p>
        <p>Privacy</p>
        <p>Cookie Settings</p>
        <p>Imprint</p>
      </div>
      <div className="flex gap-3">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <p>Made in Berlin</p>
      </div>
    </div>
  )
}

export default Footer