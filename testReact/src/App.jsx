import Header from './components/Header/header';
import UserCard from './components/UserCard/userCard';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {

const teachers = [

  {id: 1, name: "Aldor", role: "Teacher"},
  {id: 2, name: "Johan", role: "Teacher"},
  {id: 3, name: "Pelle", role: "Teacher"},
  {id: 4, name: "Nehel", role: "Teacher"}
];

  return (
    <div>
      <Header />

      <main className='user-container'>
        {teachers.map((teachers) =>(
          <UserCard 
          key={teachers.id}
          name={teachers.name}
          role={teachers.role}
          />
        ))}

      </main>
      
        <Footer />
    </div>
  );
}

export default App;