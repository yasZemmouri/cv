import Header from '../components/Header'
import Aside from '../components/Aside';
import Main from '../components/Main';

export const Cv = ({person}) => {
  return (
    <div className="page">
        <Header fName={person.fName} lName={person.lName} title={person.title}/>
        <Aside tel={person.tel} email={person.email} city={person.city}/>
        <Main summary={person.summary}/>
    </div>
  )
}