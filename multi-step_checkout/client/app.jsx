class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [Checkout, FormOne, FormTwo, FormThree, Purchase],
      currentView: Checkout,
      currentForm: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNext(e) {
    this.setState({
      currentView: this.state.steps[this.state.steps.indexOf(this.state.currentView) + 1 || 0]
    });
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(this.state.currentForm),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  handleSubmit (e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(this.state.currentForm),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  handleFormChange(e) {
    let value = e.target.value;
    let newForm = this.state.currentForm;
    newForm[e.target.name] = value;
    this.setState({
      currentForm: newForm
    })
  }

  render() {
    return (
      <div id="container">
      <this.state.currentView onChange={e => this.handleFormChange(e)} onClick={e => this.handleNext(e)} onclick={e => this.handleSubmit(e)}/>
      </div>
    )
  }
}

const Checkout = props => (
    <button onClick={props.onClick}>Checkout</button>
)

const FormOne = props => (
    <div id="formOne" class="form-style-8">
      <h4>Account Information</h4>
      <form>  
        Name: 
        <input type="text" name="name" id="name" placeholder="enter your name" onChange={props.onChange} /><br /><br /> 
        Email: 
        <input type="email" name="email" id="email" placeholder="enter your email" onChange={props.onChange} /><br /><br /> 
        Password: 
        <input type="password" id="password" name="password" placeholder="enter your password" onChange={props.onChange} /> 
        <br /><br /> 
        <input type="submit" value="Next" onClick={props.onClick} />
      </form>
    </div>
)

const FormTwo = props => (
    <div id="formTwo" class="form-style-8">
      <h4>Shipping Information</h4>
      <form> 
        Address: 
        <input type="text" name="firstLine" id="firstLine" onChange={props.onChange} /><br /><br /> 
        Apt: 
        <input type="text" name="secondLine" id="secondLine" onChange={props.onChange} /><br /><br /> 
        City: 
        <input type="text" name="city" id="city" placeholder="enter your city" onChange={props.onChange} /><br /><br /> 
        State: 
        <input type="text" name="state" id="state" placeholder="enter your state" onChange={props.onChange} /><br /><br /> 
        Zipcode: 
        <input type="number" name="zipcode" id="zipcode" placeholder="enter your zipcode" onChange={props.onChange} />
        <br /> <br /> 
        <input type="submit" value="Next" onClick={props.onClick} />
      </form>
    </div>
)

const FormThree = props => (
  <div id="formThree" class="form-style-8">
    <h4>Credit Card Information</h4> 
    <form>
      Credit Card #: 
      <input type="number" name="creditCard" id="creditCard" placeholder="enter your credit card information" onChange={props.onChange} /><br /><br /> 
      Expirate Date: 
      <input type="date" name="expiration" id="expiration"  onChange={props.onChange} /><br /><br /> 
      CVV: 
      <input type="number" name="cvv" placeholder="cvv" onChange={props.onChange} /><br /><br /> 
      Billing Zipcode: 
      <input type="number" name="billingZip" id="billingZip" placeholder="enter billing zipcode" onChange={props.onChange} />
      <br /><br /> 
      <input type="submit" value="Next" onClick={props.onClick} onChange={props.onChange} />
    </form>
  </div>
)

const Purchase = props => (
  <div id="purchase">
  <h4>Confirmation</h4>
  <button id='confirm-button' onClick={props.onclick}>Confirm Purchase</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));