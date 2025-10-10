// src/admin/AdminPanel.tsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Dashboard from './Dashboard';
import ExperienceManager from './components/ExperienceManager';
import SkillsManager from './components/SkillsManager';
import ProjectsManager from './components/ProjectsManager';
import FileManager from './components/FileManager';
import ExportImport from './components/ExportImport';
import Settings from './components/Settings';
import BackupRestore from './components/BackupRestore';

type AdminView = 'dashboard' | 'personal' | 'experience' | 'skills' | 'projects' | 'files' | 'export' | 'backup' | 'settings';

export default function AdminPanel() {
  const { logout } = useAuth();
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'personal':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Info Management</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Coming soon</p>
          </div>
        );
      case 'experience':
        return <ExperienceManager />;
      case 'skills':
        return <SkillsManager />;
      case 'projects':
        return <ProjectsManager />;
      case 'files':
        return <FileManager />;
      case 'export':
        return <ExportImport />;
      case 'backup':
        return <BackupRestore />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogout={logout}
      />

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        {renderView()}
      </main>
    </div>
  );
}