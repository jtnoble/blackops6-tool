import placeholderLogo from '../assets/1600x200.svg'
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
          <img src={placeholderLogo} alt={placeholderLogo} onClick={() => handleRedirect("/zombies/liberty-falls")}/>
          <img src={placeholderLogo} alt={placeholderLogo} onClick={() => handleRedirect("/zombies/terminus")}/>
        </div>
      </div>
    )
  }
  
  export default Zombies