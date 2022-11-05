import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import Toaster from './components/ToastContainer/Toaster'
import './index.css'
import Home from './pages/home/Home'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<Home />
		<Toaster />
	</QueryClientProvider>
)
