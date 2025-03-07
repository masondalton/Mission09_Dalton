import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";
console.log(teamsData);
const teams = teamsData.teams;
console.log(teamsData);

// Heading section to introduce user to the site
function Welcome() {
  return <h1>March Madness Teams</h1>;
}

// Team Card
function Team({
  tid,
  cid,
  did,
  school,
  name,
  abbrev,
  pop,
  city,
  state,
  latitude,
  longitude,
}: {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}) {
  return (
    <>
      <div>
        <h2>
          The {name} ({tid})
        </h2>
        <h3>
          of {school} ({abbrev})
        </h3>
        <h4>
          From {city}, {state} located at (lat: {latitude}, long: {longitude})
        </h4>
        <h4>has a population of {pop}</h4>
        <h5>
          Conference: {cid} Division: {did}
        </h5>
        <br></br>
      </div>
    </>
  );
}
// List of team cards
function TeamList() {
  return (
    <>
      {teams.map((singleTeam) => (
        <Team key={singleTeam.tid} {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
