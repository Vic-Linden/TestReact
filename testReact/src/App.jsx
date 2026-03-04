import Header from './components/Header/header';
import UserCard from './components/UserCard/userCard';

function App() {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex', gap: '10px', padding: '20px'}}>
        <UserCard name="aldor" role="teacher" />
        <UserCard name="johan" role="teacher" />
        <UserCard name="pelle" role="teacher" />
      </main>
    </div>
  );
}

export default App;