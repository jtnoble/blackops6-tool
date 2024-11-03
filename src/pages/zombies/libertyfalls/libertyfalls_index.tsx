import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/libertyfalls_index.module.css'

const LibertyFalls = () => {

    const navigate = useNavigate();

    const handleRedirect = (endpoint: any) => {
      navigate(endpoint);
    };
    
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Liberty Falls</h1>
        <div className={styles.imgContainer}>
          <div>
            <h3 className={styles.addHref} onClick={() => handleRedirect('/zombies/liberty-falls/thrustodyne')}>Jet Gun (Thrustodyne)</h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default LibertyFalls