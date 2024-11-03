import placeholderLogo from '../assets/600x800.svg'
import zombiesBGArt from '../assets/zombies_bg_art.png'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/indexPage.module.css'

const IndexPage = () => {

  const navigate = useNavigate();

  const handleRedirect = (endpoint: any) => {
    navigate(endpoint);
  };
  
  return (
    <div className={styles.container}>
      <h1>Black Ops 6: MultiTool</h1>
      <div className={styles.imgContainer}>
        {/* <img src={placeholderLogo} alt={placeholderLogo} onClick={() => handleRedirect("/multiplayer")}/> */}
        <img src={zombiesBGArt} alt={placeholderLogo} onClick={() => handleRedirect("/zombies")}/>
      </div>
    </div>
  )
}

export default IndexPage
