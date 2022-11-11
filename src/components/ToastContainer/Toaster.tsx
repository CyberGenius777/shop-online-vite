import { Bounce, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Toaster = () => {
	return (
		<ToastContainer
			pauseOnHover
			closeOnClick
			closeButton={false}
			autoClose={2000}
			position='bottom-center'
			theme='colored'
			transition={Bounce}
			hideProgressBar
		/>
	)
}

export default Toaster
