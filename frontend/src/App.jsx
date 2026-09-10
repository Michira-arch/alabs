import { Routes, Route } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { AuthProvider } from './hooks/useAuth'

/* Abiotic Labs home */
import AbioticHome from './abiotic/AbioticHome'

/* Abiotic Labs division pages */
import DivisionLayout from './abiotic/DivisionLayout'
import Drugs from './abiotic/pages/Drugs'
import Materials from './abiotic/pages/Materials'
import Fuels from './abiotic/pages/Fuels'
import Industrial from './abiotic/pages/Industrial'

/* Abiotic Nutrition (formerly "Machine" startup website) */
import MachineLayout from './machine/MachineLayout'
import Home from './machine/pages/Home'
import Technology from './machine/pages/Technology'
import Research from './machine/pages/Research'
import Vision from './machine/pages/Vision'
import About from './machine/pages/About'
import Investors from './machine/pages/Investors'
import Contact from './machine/pages/Contact'

/* Abiotic Labs Research & Publications */
import ResearchLayout from './research/ResearchLayout'
import ResearchIndex from './research/ResearchIndex'
import ArticleView from './research/ArticleView'

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
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import NotFound from './components/NotFound'

export default function App() {
  const [toast, setToast] = useState({ message: '', visible: false })

  const showToast = useCallback((msg) => {
    setToast({ message: msg, visible: true })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3200)
  }, [])

  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Abiotic Labs landing page */}
        <Route path="/" element={<AbioticHome />} />

        {/* Abiotic Labs division placeholders */}
        <Route path="/drugs" element={<DivisionLayout label="Abiotic Drugs" path="/drugs" tagline="Pharmaceutical-grade synthesis" />}>
          <Route index element={<Drugs />} />
        </Route>
        <Route path="/materials" element={<DivisionLayout label="Abiotic Materials" path="/materials" tagline="Designer polymers and structural compounds" />}>
          <Route index element={<Materials />} />
        </Route>
        <Route path="/fuels" element={<DivisionLayout label="Abiotic Fuels" path="/fuels" tagline="Carbon-neutral high-energy-density compounds" />}>
          <Route index element={<Fuels />} />
        </Route>
        <Route path="/industrial" element={<DivisionLayout label="Abiotic Industrial" path="/industrial" tagline="Bulk chemical synthesis at scale" />}>
          <Route index element={<Industrial />} />
        </Route>

        {/* Abiotic Labs Research & Publications */}
        <Route path="/research" element={<ResearchLayout />}>
          <Route index element={<ResearchIndex />} />
          <Route path=":slug" element={<ArticleView />} />
        </Route>
        <Route path="/articles" element={<ResearchLayout />}>
          <Route index element={<ResearchIndex />} />
          <Route path=":slug" element={<ArticleView />} />
        </Route>
        <Route path="/publications" element={<ResearchLayout />}>
          <Route index element={<ResearchIndex />} />
          <Route path=":slug" element={<ArticleView />} />
        </Route>

        {/* Abiotic Nutrition sub-domain (formerly Machine startup website) */}
        <Route path="/nutrition" element={<MachineLayout />}>
          <Route index element={<Home />} />
          <Route path="technology" element={<Technology />} />
          <Route path="research" element={<Research />} />
          <Route path="vision" element={<Vision />} />
          <Route path="about" element={<About />} />
          <Route path="investors" element={<Investors showToast={showToast} />} />
          <Route path="contact" element={<Contact showToast={showToast} />} />
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

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toast message={toast.message} visible={toast.visible} />
    </AuthProvider>
  )
}
