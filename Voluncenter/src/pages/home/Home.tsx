import { images } from '~/constants';
import "~/pages/home/Home.css"


export default function HomePage() {
  return (
    <div className="app_logo">
      <img src={images.logo} alt="Logo" />
      <div className="title">
        <h1>VolunCenter</h1>
      </div>
    </div>
  )
}