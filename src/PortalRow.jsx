import styles from './modules/PortalRows.module.css'



function PortalRow({portals, title}) {

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.row}>
                {portals}
            </div>
        </div>
    )
}

export default PortalRow