import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import ActiveSessions from '../components/ActiveSessions';
import CreateSessionModal from '../components/CreateSessionModal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PerformanceInsights from '../components/PerformanceInsights';
import ProductivityTips from '../components/ProductivityTips';
import QuickActions from '../components/QuickActions';
import RecentSessions from '../components/RecentSessions';
import StatsCards from '../components/StatsCards';
import WelcomeSection from '../components/WelcomeSection';
import { useActiveSessions, useCreateSession, useMyRecentSessions } from '../hooks/useSessions';


function DashboardPage() {

  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [roomConfig, setRoomConfig] = useState({
    problem: "",
    difficulty: "",
    isPrivate: false
  });

  const createSessionMutation = useCreateSession();
  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig?.problem || !roomConfig?.difficulty) {
      toast.error("Please select a problem and difficulty");
      return;
    }

    createSessionMutation.mutate(
      {
        problem: roomConfig?.problem,
        difficulty: roomConfig?.difficulty.toLowerCase(),
        isPrivate: roomConfig?.isPrivate
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data?.session?._id}`);
        }
      }
    );
  }


  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const loading = loadingActiveSessions || loadingRecentSessions;


  console.log("Active sessions:", activeSessions);
  console.log("Recent sessions:", recentSessions);

  console.log("Active sessions data:", activeSessionsData);
  console.log("Recent sessions data:", recentSessionsData);


  const isUserInSession = (session) => {
    if (!user?.id) return false;

    return session?.host?.clerkId === user?.id || session?.participant?.clerkId === user?.id;

  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="flex flex-col items-center gap-4">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse"></div>

          <p className="text-base-content/70 animate-pulse">
            Loading dashboard...
          </p>

        </div>
      </div>
    )
  }


  return (
    <>
      <div className='min-h-screen bg-base-300'>
        <Navbar />
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        {/*  Grid Layout*/}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatsCards activeSessionsCount={activeSessions?.length} recentSessionsCount={recentSessions?.length} />
            <ActiveSessions sessions={activeSessions} isLoading={loadingActiveSessions} isUserInSession={isUserInSession} />
          </div>

          <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions} />

          <PerformanceInsights
            activeSessionsCount={activeSessions?.length}
            recentSessionsCount={recentSessions?.length}
          />

          <QuickActions onCreateSession={() => setShowCreateModal(true)} />
          <ProductivityTips />
        </div>
        <Footer />
      </div>



      <CreateSessionModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} roomConfig={roomConfig} setRoomConfig={setRoomConfig} onCreateRoom={handleCreateRoom} isCreating={createSessionMutation.isPending} />
    </>
  )
}

export default DashboardPage
