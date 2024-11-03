import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/terminus_index.module.css'

const Terminus = () => {

    const navigate = useNavigate();

    const handleRedirect = (endpoint: any) => {
      navigate(endpoint);
    };
    
    return (
      <div className={styles.container}>
        <h1>Terminus</h1>
        <div className={styles.imgContainer}>
          <div>
            <h3 className={styles.addHref} onClick={() => handleRedirect('/zombies/terminus/beamsmasher')}>Beamsmasher</h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Terminus