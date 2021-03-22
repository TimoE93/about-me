import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <h1 className={styles.h1}>Timo Engler Webdeveloper</h1>
            </div>
        </div>

    )
}
export default Header