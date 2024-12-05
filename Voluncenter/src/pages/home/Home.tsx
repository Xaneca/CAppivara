import { images } from '~/constants';
import "~/pages/home/Home.css"


export default function HomePage() {
  return (
    <div>
      <div className="app_logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <div className="title">
        <h1>VolunCenter</h1>
      </div>
    </div>
  )
}