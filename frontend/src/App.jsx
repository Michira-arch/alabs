import { Routes, Route } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { AuthProvider } from './hooks/useAuth'

/* Machine (startup website) */
import MachineLayout from './machine/MachineLayout'
import Home from './machine/pages/Home'
import Technology from './machine/pages/Technology'
import Research from './machine/pages/Research'
import Vision from './machine/pages/Vision'
import About from './machine/pages/About'
import Investors from './machine/pages/Investors'
import Contact from './machine/pages/Contact'

/* AbioCore (platform) */
import PlatformLayout from './platform/PlatformLayout'
import Dashboard from './platform/pages/Dashboard'
import Leaderboard from './platform/pages/Leaderboard'
import Explorer from './platform/pages/Explorer'
import Repository from './platform/pages/Repository'
import SalvageYard from './platform/pages/SalvageYard'
import ValidationAPI from './platform/pages/ValidationAPI'
import Discussions from './platform/pages/Discussions'
import Requests from './platform/pages/Requests'
import Contributors from './platform/pages/Contributors'
import Changelog from './platform/pages/Changelog'
import Contribute from './platform/pages/Contribute'

/* Shared */
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState({ message: '', visible: false })

  const showToast = useCallback((msg) => {
    setToast({ message: msg, visible: true })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3200)
  }, [])

  return (
    <AuthProvider>
      <>
      <Routes>
        {/* Machine startup website */}
        <Route element={<MachineLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/research" element={<Research />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors showToast={showToast} />} />
          <Route path="/contact" element={<Contact showToast={showToast} />} />
        </Route>

        {/* AbioCore platform */}
        <Route path="/platform" element={<PlatformLayout showToast={showToast} />}>
          <Route index element={<Dashboard />} />
          <Route path="leaderboard" element={<Leaderboard showToast={showToast} />} />
          <Route path="molecules" element={<Explorer showToast={showToast} />} />
          <Route path="repository" element={<Repository showToast={showToast} />} />
          <Route path="salvage-yard" element={<SalvageYard showToast={showToast} />} />
          <Route path="validation" element={<ValidationAPI />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="requests" element={<Requests />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="contribute" element={<Contribute showToast={showToast} />} />
        </Route>
      </Routes>
      <Toast message={toast.message} visible={toast.visible} />
      </>
    </AuthProvider>
  )
}
