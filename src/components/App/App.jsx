import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
