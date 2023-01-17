import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.wifiZone}>
                <div>
                    <img height="64px" width="97px" src="assets/wifi-zone.svg" alt="Wifi-Zone" />
                    <strong>ZONE</strong>
                </div>
                <img height="120px" width="140px" src="assets/logo-if-baiano.png" alt="Wifi-Zone" />
            </div>
            <strong>REDE SERVIDORES</strong>
        </header>
    )
}