import './Loader.css'

const Loader = () => {
	return (
		<div className='flex justify-center items-center w-screen h-screen border-cyan-700'>
			<div className='lds-ellipsis '>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
