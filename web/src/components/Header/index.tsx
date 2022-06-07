import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.wifiZone}>
                <img src="assets/wifi-zone.svg" alt="Wifi-Zone" />
                <strong>ZONE</strong>
            </div>
            <strong>REDE SERVIDORES</strong>
        </header>
    )
}