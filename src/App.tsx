import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";
console.log(teamsData);
const teams = teamsData.teams;
console.log(teamsData);

// Heading section to introduce user to the site
// Including the purpose
function Welcome() {
  return (
    <>
      <div>
        <h1>March Madness Teams</h1>
        <h2>ALL the info about college teams in the NCAA</h2>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

// Team Card, make sure to includ mascot, school name, and location
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
        <h4>has a population of {pop}00</h4>
        <h5>
          Conference: {cid} Division: {did}
        </h5>
        <br></br>
      </div>
    </>
  );
}

// List of team cards
// This will go through the entire json file and access the items and info for each team and pass them into data for the team cards
// With these team cards, we will then have them displayed in a list
function TeamList() {
  return (
    <>
      {teams.map((singleTeam) => (
        <Team key={singleTeam.tid} {...singleTeam} />
      ))}
    </>
  );
}

// For calling the app open
function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
