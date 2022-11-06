import { useState } from 'react'
import styles from './Gallery.module.scss'

interface IGalleryProps {
	images: string[]
}

const Gallery: React.FC<IGalleryProps> = ({ images: withThumNail }) => {
	const images = withThumNail.slice(1, withThumNail.length - 1)
	const [currentIndex, setCurrentIndex] = useState(0)

	const onChange = (idx: number) => () => {
		setCurrentIndex(idx)
	}

	return (
		<div className={styles.gallery}>
			<div
				style={{
					backgroundImage: `url(${images[currentIndex]})`
				}}
				className={styles.image}
			/>
			<div className={styles.list}>
				{images.map((currentImage, index) => (
					<button key={currentImage} onClick={onChange(index)}>
						<div
							style={{
								backgroundImage: `url(${currentImage})`
							}}
							className={styles.tabs}
						/>
					</button>
				))}
			</div>
		</div>
	)
}

export default Gallery
