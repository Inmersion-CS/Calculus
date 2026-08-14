import { HashRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { siteConfig } from './siteConfig';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <a href="#main-content">Skip to content</a>
        <nav aria-label="Primary navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/contribute">Contribute</NavLink>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer>
        <a href={siteConfig.repositoryUrl}>GitHub repository</a>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <p>Foundation v0.1</p>
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.shortPurpose}</p>
      <p>{siteConfig.longPurpose}</p>
    </Layout>
  );
}

function RoadmapPage() {
  return (
    <Layout>
      <h1>Roadmap</h1>
      <ul>
        {siteConfig.roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
}

function ContributePage() {
  return (
    <Layout>
      <h1>Contribute</h1>
      <p>Contribution guidance is being prepared as part of Foundation v0.1.</p>
    </Layout>
  );
}

function NotFoundPage() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return home</Link>
    </Layout>
  );
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
