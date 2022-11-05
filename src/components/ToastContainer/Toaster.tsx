import { Flip, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Toaster = () => {
	return (
		<ToastContainer
			pauseOnHover
			closeOnClick
			closeButton={false}
			autoClose={3000}
			position='bottom-center'
			theme='colored'
			transition={Flip}
			hideProgressBar
		/>
	)
}

export default Toaster
