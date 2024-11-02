import placeholderLogo from '../assets/1600x200.svg'
import libertyFallsBanner from '../assets/liberty_falls_banner.png'
import terminusBanner from '../assets/terminus_banner.png'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/zombiesPage.module.css'

const Zombies = () => {

    const navigate = useNavigate();

    const handleRedirect = (endpoint: any) => {
      navigate(endpoint);
    };
    
    return (
      <div className={styles.container}>
        <h1>Zombies</h1>
        <div className={styles.imgContainer}>
          <img src={libertyFallsBanner} alt={placeholderLogo} onClick={() => handleRedirect("/blackops6-tool/zombies/liberty-falls")}/>
          <img src={terminusBanner} alt={placeholderLogo} onClick={() => handleRedirect("/blackops6-tool/zombies/terminus")}/>
        </div>
      </div>
    )
  }
  
  export default Zombies