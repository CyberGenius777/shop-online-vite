import React, { PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

interface ILayoutProps {
	title?: string
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
	children,
	title,
	...rest
}) => {
	return (
		<div {...rest} className={styles.layout}>
			{title && <h1 className={styles.title}>{title}</h1>}
			{children}
		</div>
	)
}

export default Layout
