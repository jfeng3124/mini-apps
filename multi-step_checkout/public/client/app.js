class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [Checkout, FormOne, FormTwo, FormThree, Purchase],
      currentView: Checkout,
      currentForm: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNext(e) {
    this.setState({
      currentView: this.state.steps[this.state.steps.indexOf(this.state.currentView) + 1 || 0]
    });
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(this.state.currentForm),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response))).catch(error => console.error('Error:', error));
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(this.state.currentForm),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response))).catch(error => console.error('Error:', error));
  }

  handleFormChange(e) {
    let value = e.target.value;
    let newForm = this.state.currentForm;
    newForm[e.target.name] = value;
    this.setState({
      currentForm: newForm
    });
  }

  render() {
    return React.createElement(
      'div',
      { id: 'container' },
      React.createElement(this.state.currentView, { onChange: e => this.handleFormChange(e), onClick: e => this.handleNext(e), onclick: e => this.handleSubmit(e) })
    );
  }
}

const Checkout = props => React.createElement(
  'button',
  { onClick: props.onClick },
  'Checkout'
);

const FormOne = props => React.createElement(
  'div',
  { id: 'formOne', 'class': 'form-style-8' },
  React.createElement(
    'h4',
    null,
    'Account Information'
  ),
  React.createElement(
    'form',
    null,
    'Name:',
    React.createElement('input', { type: 'text', name: 'name', id: 'name', placeholder: 'enter your name', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Email:',
    React.createElement('input', { type: 'email', name: 'email', id: 'email', placeholder: 'enter your email', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Password:',
    React.createElement('input', { type: 'password', id: 'password', name: 'password', placeholder: 'enter your password', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement('input', { type: 'submit', value: 'Next', onClick: props.onClick })
  )
);

const FormTwo = props => React.createElement(
  'div',
  { id: 'formTwo', 'class': 'form-style-8' },
  React.createElement(
    'h4',
    null,
    'Shipping Information'
  ),
  React.createElement(
    'form',
    null,
    'Address:',
    React.createElement('input', { type: 'text', name: 'firstLine', id: 'firstLine', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Apt:',
    React.createElement('input', { type: 'text', name: 'secondLine', id: 'secondLine', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'City:',
    React.createElement('input', { type: 'text', name: 'city', id: 'city', placeholder: 'enter your city', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'State:',
    React.createElement('input', { type: 'text', name: 'state', id: 'state', placeholder: 'enter your state', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Zipcode:',
    React.createElement('input', { type: 'number', name: 'zipcode', id: 'zipcode', placeholder: 'enter your zipcode', onChange: props.onChange }),
    React.createElement('br', null),
    ' ',
    React.createElement('br', null),
    React.createElement('input', { type: 'submit', value: 'Next', onClick: props.onClick })
  )
);

const FormThree = props => React.createElement(
  'div',
  { id: 'formThree', 'class': 'form-style-8' },
  React.createElement(
    'h4',
    null,
    'Credit Card Information'
  ),
  React.createElement(
    'form',
    null,
    'Credit Card #:',
    React.createElement('input', { type: 'number', name: 'creditCard', id: 'creditCard', placeholder: 'enter your credit card information', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Expirate Date:',
    React.createElement('input', { type: 'date', name: 'expiration', id: 'expiration', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'CVV:',
    React.createElement('input', { type: 'number', name: 'cvv', placeholder: 'cvv', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    'Billing Zipcode:',
    React.createElement('input', { type: 'number', name: 'billingZip', id: 'billingZip', placeholder: 'enter billing zipcode', onChange: props.onChange }),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement('input', { type: 'submit', value: 'Next', onClick: props.onClick, onChange: props.onChange })
  )
);

const Purchase = props => React.createElement(
  'div',
  { id: 'purchase' },
  React.createElement(
    'h4',
    null,
    'Confirmation'
  ),
  React.createElement(
    'button',
    { id: 'confirm-button', onClick: props.onclick },
    'Confirm Purchase'
  )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic3RlcHMiLCJDaGVja291dCIsIkZvcm1PbmUiLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiUHVyY2hhc2UiLCJjdXJyZW50VmlldyIsImN1cnJlbnRGb3JtIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZU5leHQiLCJlIiwic2V0U3RhdGUiLCJpbmRleE9mIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUZvcm1DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld0Zvcm0iLCJuYW1lIiwicmVuZGVyIiwib25DbGljayIsIm9uQ2hhbmdlIiwib25jbGljayIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQUFDQyxRQUFELEVBQVdDLE9BQVgsRUFBb0JDLE9BQXBCLEVBQTZCQyxTQUE3QixFQUF3Q0MsUUFBeEMsQ0FESTtBQUVYQyxtQkFBYUwsUUFGRjtBQUdYTSxtQkFBYTtBQUhGLEtBQWI7QUFLQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURDLGFBQVdDLENBQVgsRUFBYztBQUNaLFNBQUtDLFFBQUwsQ0FBYztBQUNaTixtQkFBYSxLQUFLUCxLQUFMLENB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QixTQUFTQSxNQUFNdUMsT0FBM0M7QUFBQTtBQUFBO0FBRkEsQ0FERjs7QUFPQUMsU0FBU0osTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCSyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0ZXBzOiBbQ2hlY2tvdXQsIEZvcm1PbmUsIEZvcm1Ud28sIEZvcm1UaHJlZSwgUHVyY2hhc2VdLFxuICAgICAgY3VycmVudFZpZXc6IENoZWNrb3V0LFxuICAgICAgY3VycmVudEZvcm06IHt9LFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZU5leHQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZXc6IHRoaXMuc3RhdGUuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwcy5pbmRleE9mKHRoaXMuc3RhdGUuY3VycmVudFZpZXcpICsgMSB8fCAwXVxuICAgIH0pO1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGZldGNoKCcvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmN1cnJlbnRGb3JtKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBmZXRjaCgnLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5jdXJyZW50Rm9ybSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xuICB9XG5cbiAgaGFuZGxlRm9ybUNoYW5nZShlKSB7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5ld0Zvcm0gPSB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtO1xuICAgIG5ld0Zvcm1bZS50YXJnZXQubmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRGb3JtOiBuZXdGb3JtXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPHRoaXMuc3RhdGUuY3VycmVudFZpZXcgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlKGUpfSBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlTmV4dChlKX0gb25jbGljaz17ZSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IENoZWNrb3V0ID0gcHJvcHMgPT4gKFxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+Q2hlY2tvdXQ8L2J1dHRvbj5cbilcblxuY29uc3QgRm9ybU9uZSA9IHByb3BzID0+IChcbiAgICA8ZGl2IGlkPVwiZm9ybU9uZVwiIGNsYXNzPVwiZm9ybS1zdHlsZS04XCI+XG4gICAgICA8aDQ+QWNjb3VudCBJbmZvcm1hdGlvbjwvaDQ+XG4gICAgICA8Zm9ybT4gIFxuICAgICAgICBOYW1lOiBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgbmFtZVwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz48YnIgLz48YnIgLz4gXG4gICAgICAgIEVtYWlsOiBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgZW1haWxcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+PGJyIC8+PGJyIC8+IFxuICAgICAgICBQYXNzd29yZDogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIHBhc3N3b3JkXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPiBcbiAgICAgICAgPGJyIC8+PGJyIC8+IFxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pXG5cbmNvbnN0IEZvcm1Ud28gPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm1Ud29cIiBjbGFzcz1cImZvcm0tc3R5bGUtOFwiPlxuICAgICAgPGg0PlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oND5cbiAgICAgIDxmb3JtPiBcbiAgICAgICAgQWRkcmVzczogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdExpbmVcIiBpZD1cImZpcnN0TGluZVwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz48YnIgLz48YnIgLz4gXG4gICAgICAgIEFwdDogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWNvbmRMaW5lXCIgaWQ9XCJzZWNvbmRMaW5lXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPjxiciAvPjxiciAvPiBcbiAgICAgICAgQ2l0eTogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgaWQ9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIGNpdHlcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+PGJyIC8+PGJyIC8+IFxuICAgICAgICBTdGF0ZTogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIGlkPVwic3RhdGVcIiBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgc3RhdGVcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+PGJyIC8+PGJyIC8+IFxuICAgICAgICBaaXBjb2RlOiBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiemlwY29kZVwiIGlkPVwiemlwY29kZVwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciB6aXBjb2RlXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxuICAgICAgICA8YnIgLz4gPGJyIC8+IFxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pXG5cbmNvbnN0IEZvcm1UaHJlZSA9IHByb3BzID0+IChcbiAgPGRpdiBpZD1cImZvcm1UaHJlZVwiIGNsYXNzPVwiZm9ybS1zdHlsZS04XCI+XG4gICAgPGg0PkNyZWRpdCBDYXJkIEluZm9ybWF0aW9uPC9oND4gXG4gICAgPGZvcm0+XG4gICAgICBDcmVkaXQgQ2FyZCAjOiBcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImNyZWRpdENhcmRcIiBpZD1cImNyZWRpdENhcmRcIiBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgY3JlZGl0IGNhcmQgaW5mb3JtYXRpb25cIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+PGJyIC8+PGJyIC8+IFxuICAgICAgRXhwaXJhdGUgRGF0ZTogXG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZXhwaXJhdGlvblwiIGlkPVwiZXhwaXJhdGlvblwiICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+PGJyIC8+PGJyIC8+IFxuICAgICAgQ1ZWOiBcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImN2dlwiIHBsYWNlaG9sZGVyPVwiY3Z2XCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPjxiciAvPjxiciAvPiBcbiAgICAgIEJpbGxpbmcgWmlwY29kZTogXG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgaWQ9XCJiaWxsaW5nWmlwXCIgcGxhY2Vob2xkZXI9XCJlbnRlciBiaWxsaW5nIHppcGNvZGVcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XG4gICAgICA8YnIgLz48YnIgLz4gXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBQdXJjaGFzZSA9IHByb3BzID0+IChcbiAgPGRpdiBpZD1cInB1cmNoYXNlXCI+XG4gIDxoND5Db25maXJtYXRpb248L2g0PlxuICA8YnV0dG9uIGlkPSdjb25maXJtLWJ1dHRvbicgb25DbGljaz17cHJvcHMub25jbGlja30+Q29uZmlybSBQdXJjaGFzZTwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19