import React from 'react';
import './App.css';
import logo from './logo.png';

const recipes = {
  spaghetti: {ingredients: [' spaghetti noodles (1.5 lbs) ', 'Prego sauce (meat flavored) ', 'ground beef (1.5 lbs)', 'onion', 'corn']},
  hamburgerCasserole: {ingredients: [' rice ', ' onion ', ' cream of mushroom (1 can)','ground beef (1.5 lbs)', 'shredded cheese', 'onion', 'corn']},
  pizzas: {ingredients: [' frozen pizza: pepperoni ', ' frozen pizza: cheese ']},
  tacos: {ingredients: [' ground beef (1.5 lbs)', ' onion ', ' taco seasoning (2 packets) ',' taco shells ', ' refried beans ']},
  beefTipsAndRice: {ingredients: [' beef tips (1.5 lbs)', ' rice ', ' soy sauce ',' worchestershire sauce ', ' onion ', ' cream of mushroom (2 cans)']},
  chickenAndDumplings :{ingredients: [' chicken breasts (5) ', ' cream of mushroom (2 cans)', ' chicken broth ',' biscuits ']},
  chiliBeansAndRice: {ingredients: [' chicken (1.5 lbs)', ' chicken broth ', ' pork & beans (2 cans)',' long grain rice ', ' chili powder ', ' diced tomatoes ', ' green bell pepper ']},
  creamyRanchChicken: {ingredients: [' cream cheese ', ' cream of mushroom (2 cans)', ' ranch seasoning ',' rice ', ' chicken broth ', ' chicken breasts (4)']},
  chickenStirfry: {ingredients: [' chicken breasts (4)', ' soy sauce ', ' stir fry veggies ',' rice ']},
  chickenBurritoBowls: {ingredients: [' chicken breasts (5) ', ' rotel ', ' diced tomatoes ',' chicken broth ', ' chili powder ', ' rice ', ' black beans ', 'corn']},
  roast: {ingredients: [' chuck roast ', ' pepperocinis (8) ', ' ranch seasoning (1 packet) ']},
  weeklyStaples: {ingredients: [' breakfast bowls (6) ', ' bananas ', ' strawberries ',' apple juice ', ' milk ', ' Ohs cereal ', ' fruity pebbles ', ' frosted mini wheats ', ' bread ', ' powdered donuts ', ' chips ', ' potatoes ']},
  biWeeklyStaples: {ingredients: [' mac & cheese cups ', ' capri sun juice pouches ', ' eggs ',' oatmeal ', ' cheese (singles) ', ' lunch meat: turkey ', ' lunch meat: ham ', ' fruit snacks', ' butter ']},
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      spaghetti: false,
      hamburgerCasserole: false,
      pizzas: false,
      tacos: false,
      beefTipsAndRice: false,
      chickenAndDumplings: false,
      chiliBeansAndRice: false,
      creamyRanchChicken: false,
      chickenStirfry: false,
      chickenBurritoBowls: false,
      roast: false,
      weeklyStaples: false,
      biWeeklyStaples: false,
      groceryList: [ ]
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);

  };


  handleInputChange(event){
    const target = event.target;
    const name= target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({[name]: value});

  };

  handleFormSubmit(formSubmitEvent){
    formSubmitEvent.preventDefault();

    const spaghetti = this.state.spaghetti;
    const hamburgerCasserole = this.state.hamburgerCasserole;
    const pizzas = this.state.pizzas;
    const tacos = this.state.tacos;
    const beefTipsAndRice = this.state.beefTipsAndRice;
    const chickenAndDumplings = this.state.chickenAndDumplings;
    const chiliBeansAndRice = this.state.chiliBeansAndRice;
    const creamyRanchChicken = this.state.creamyRanchChicken;
    const chickenStirfry = this.state.chickenStirfry;
    const chickenBurritoBowls = this.state.chickenBurritoBowls;
    const roast = this.state.roast;
    const weeklyStaples = this.state.weeklyStaples;
    const biWeeklyStaples = this.state.biWeeklyStaples;



    const groceryItems = [];

    const createGroceryList=(recipe)=>{
      if (spaghetti=== true){
        groceryItems.push(recipes.spaghetti.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (hamburgerCasserole=== true){
        groceryItems.push(recipes.hamburgerCasserole.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (pizzas=== true){
        groceryItems.push(recipes.pizzas.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (tacos=== true){
        groceryItems.push(recipes.tacos.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (beefTipsAndRice=== true){
        groceryItems.push(recipes.beefTipsAndRice.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (chickenAndDumplings=== true){
        groceryItems.push(recipes.chickenAndDumplings.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (chiliBeansAndRice=== true){
        groceryItems.push(recipes.chiliBeansAndRice.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (creamyRanchChicken=== true){
        groceryItems.push(recipes.creamyRanchChicken.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (chickenStirfry=== true){
        groceryItems.push(recipes.chickenStirfry.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (chickenBurritoBowls=== true){
        groceryItems.push(recipes.chickenBurritoBowls.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (roast=== true){
        groceryItems.push(recipes.roast.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (weeklyStaples=== true){
        groceryItems.push(recipes.weeklyStaples.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};
      if (biWeeklyStaples=== true){
        groceryItems.push(recipes.biWeeklyStaples.ingredients.map(item => {
          return( <li>{item}</li>)
        }))};

    };
    this.setState({groceryList: groceryItems});


    createGroceryList();

  };


  render(){
    const {groceryList}= this.state;
    return(
      <div className="body">

      <div className="title">

      <h1 className="pageTitle"><a className="blue">Grocer- </a>eaze</h1>

      <h3 className="subtitle">No more hand-written grocery lists.</h3>

      </div>

      <form className="form" onSubmit={this.handleFormSubmit}>
        <h2 className="sectionHeading">What would you like for dinner this week?</h2>

        <div className="recipe">

        <label>
          <input
            name="spaghetti"
            type="checkbox"
            value={recipes.spaghetti.ingredients}
            checked={this.state.spaghetti}
            onChange={this.handleInputChange} />
            Spaghetti
        </label>

        <br />

        <label>
          <input
            name="hamburgerCasserole"
            type="checkbox"
            value={recipes.hamburgerCasserole.ingredients}
            checked={this.state.hamburgerCasserole}
            onChange={this.handleInputChange} />
            Hamburger Casserole
        </label>

        <br />

        <label>
          <input
            name="pizzas"
            type="checkbox"
            value={recipes.pizzas.ingredients}
            checked={this.state.pizzas}
            onChange={this.handleInputChange} />
            Pizzas (fend for yourself night)
        </label>

        <br/>

        <label>
          <input
            name="tacos"
            type="checkbox"
            value={recipes.tacos.ingredients}
            checked={this.state.tacos}
            onChange={this.handleInputChange} />
            Tacos
        </label>

        <br />

        <label>
          <input
            name="beefTipsAndRice"
            type="checkbox"
            value={recipes.beefTipsAndRice.ingredients}
            checked={this.state.beefTipsAndRice}
            onChange={this.handleInputChange} />
            Beef Tips and Rice
        </label>

        <br />

        <label>
          <input
            name="chickenAndDumplings"
            type="checkbox"
            value={recipes.chickenAndDumplings.ingredients}
            checked={this.state.chickenAndDumplings}
            onChange={this.handleInputChange} />
            Chicken & Dumplings
        </label>

        <br />

        <label>
          <input
            name="chiliBeansAndRice"
            type="checkbox"
            value={recipes.chiliBeansAndRice.ingredients}
            checked={this.state.chiliBeansAndRice}
            onChange={this.handleInputChange} />
            Chili Beans and Rice
        </label>

        <br />

        <label>
          <input
            name="creamyRanchChicken"
            type="checkbox"
            value={recipes.creamyRanchChicken.ingredients}
            checked={this.state.creamyRanchChicken}
            onChange={this.handleInputChange} />
            Creamy Ranch Chicken
        </label>

        <br />

        <label>
          <input
            name="chickenStirfry"
            type="checkbox"
            value={recipes.chickenStirfry.ingredients}
            checked={this.state.chickenStirfry}
            onChange={this.handleInputChange} />
            Chicken Stirfry
        </label>

        <br />

        <label>
          <input
            name="chickenBurritoBowls"
            type="checkbox"
            value={recipes.chickenBurritoBowls.ingredients}
            checked={this.state.chickenBurritoBowls}
            onChange={this.handleInputChange} />
            Chicken Burrito Bowls
        </label>

        <br />

        <label>
          <input
            name="roast"
            type="checkbox"
            value={recipes.roast.ingredients}
            checked={this.state.roast}
            onChange={this.handleInputChange} />
            Roast
        </label>

        <br /><br/>

        <div className="staples">

        <label>
          <input
            name="weeklyStaples"
            type="checkbox"
            value={recipes.weeklyStaples.ingredients}
            checked={this.state.weeklyStaples}
            onChange={this.handleInputChange} />
            Weekly Staples (every weekend)
        </label>

        <br />

        <label>
          <input
            name="biWeeklyStaples"
            type="checkbox"
            value={recipes.biWeeklyStaples.ingredients}
            checked={this.state.biWeeklyStaples}
            onChange={this.handleInputChange} />
            Bi-weekly Staples (payday weekends)
        </label>

        </div>

        </div>

        <br />

        <button className="submit" type="submit">Generate Grocery List</button>

      </form>

      <div className="results">

        <h2 className="sectionHeading"> Here is your grocery list for this week: </h2>

        <div className="groceryListBox">

        <p className='groceryItems'>{groceryList}</p>

        <br/>

        </div>

      </div>

      <footer className="footer">
      <br/>

      <p> A creation from <a>Axon Ventures LLC</a><img src={logo} height="50" alt="logo"/></p>

      </footer>

      </div>

    );
  };
};

export default App;
