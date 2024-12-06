import { images } from '~/constants'; // Certifique-se de que está correto
import "~/pages/page_2/page_2.css";


export default function HomePage() {
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <img src={images.profile} alt="Profile Picture" className="profile-pic" />
                <div className="welcome-text">
                    <h1>Olá, Cristina!</h1>
                    <p>Pronta para fazer uma boa ação?</p>
                </div>
            </div>

            {/* Organizations Section */}
            <div className="organizations">
                <img src={images.caritas} alt="Cáritas Portuguesa" className="organization" />
                <img src={images.ba} alt="Banco Alimentar" className="organization" />
                <img src={images.adav} alt="ADAV" className="organization" />
                <img src={images.irmas} alt="Irmãs Hospitaleiras" className="organization" />
            </div>

            {/* Footer Navigation */}
            <div className="footer">
                <a href="../home">
                    <img src={images.cazinha} alt="Home page" />
                </a>
                <a href="./home">
                    <img src={images.maozinha} alt="Voluntariados" />
                </a>
                <a href="../home">
                    <img src={images.person} alt="Perfil" />
                </a>
            </div>
        </div>
    );
}
