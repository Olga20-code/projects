import './App.css';
import Table from "./components/Table";
import Product from "./components/Product";
import List from "./components/List";
import ChicagoImg from "./images/chicago.jpg"
import LosAngelesImg from "./images/los-angeles.jpg"
import NewYorkImg from "./images/new-york.jpg"


const table = [
  {id: 1, tdBold: "First Name", td: "John"},
  {id: 2, tdBold: "Last Name", td: "Silver"},
  {id: 3, tdBold: "Occupation", td: "Pirate Captain"}
]

const product = "Mouse"
const product2 = "Mouse2"

const cities = [
  {id: 1, name: "Chicago", image: ChicagoImg},
  {id: 2, name: "Los Angeles", image: LosAngelesImg},
  {id: 3, name: "New York", image: NewYorkImg}
]

function App() {
  return (
    <div className="App">
      <Table table={table} />
      <Product product={product} product2={product2} />
      <List data={cities}/>
    </div>
  );
}

export default App;
