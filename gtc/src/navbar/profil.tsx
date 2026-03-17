




import './profil.css'
import logo from './logo.png'
import video from './video.mp4'

export default function Profil() {
  return (
    <div className="container">

      <video autoPlay muted loop className="hero" src={video}></video>

      <div className="nav">
        <img src={logo} alt="" />

        <div className="text">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Customers</li>
            <li>Contact</li>
          </ul>

          <select className="drop">
            <option>EN</option>
            <option>RU</option>
            <option>AZ</option>
          </select>
        </div>
      </div>

        <div className='ipson'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque itaque cupiditate recusandae sapiente, labore eos eligendi impedit libero ex vel nesciunt excepturi pariatur nemo fugiat deleniti, totam sunt velit.</p>
          <button className='btn'>GET</button>
        </div>
        
    </div>
  )
}