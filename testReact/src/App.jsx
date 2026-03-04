import Header from './components/Header/header';
import UserCard from './components/UserCard/userCard';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <main className='user-container'>
        <UserCard name="aldor" role="teacher" />
        <UserCard name="johan" role="teacher" />
        <UserCard name="pelle" role="teacher" />
        <UserCard name="Nehel" role="teacher" />

      </main>
      
        <Footer />
    </div>
  );
}

export default App;