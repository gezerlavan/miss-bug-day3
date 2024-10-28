// const Router = ReactRouterDOM.HashRouter
const Router = ReactRouterDOM.BrowserRouter
const { Route, Routes } = ReactRouterDOM

import { AppFooter } from './cmps/AppFooter.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AdminDashboard } from './pages/AdminDashboard.jsx'
import { BugDetails } from './pages/BugDetails.jsx'
import { BugIndex } from './pages/BugIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { UserProfile } from './pages/UserProfile.jsx'

export function App() {
  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path={'/'} />
            <Route element={<BugIndex />} path={'/bug'} />
            <Route element={<BugDetails />} path={'/bug/:bugId'} />
            <Route element={<AboutUs />} path={'/about'} />
            <Route element={<UserProfile />} path={'/user'} />
            <Route element={<AdminDashboard />} path={'/admin'} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}
