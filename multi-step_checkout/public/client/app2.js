class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flow: [Checkout, FormOne, FormTwo, FormThree, Summary],
      currentView: Checkout,
      currentForm: {}
    };
  }

  handleNext() {
    this.setState({
      currentView: this.state.flow[this.state.flow.indexOf(this.state.currentView) + 1 || 0]
    });
  }

  handleSubmit() {}

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
      "div",
      { id: "container" },
      React.createElement(this.state.currentView, { onChange: e => this.handleFormChange(e), onClick: e => this.handleNext(e) })
    );
  }
}

const Checkout = props => React.createElement(
  "button",
  { onClick: props.onClick },
  "Checkout"
);

const FormOne = props => React.createElement(
  "div",
  { id: "formOne" },
  React.createElement(
    "form",
    null,
    " Account Information ",
    React.createElement("br", null),
    React.createElement("input", { type: "text", name: "name", placeholder: "Name", id: "name", onChange: props.onChange }),
    React.createElement("input", { type: "email", name: "email", placeholder: "Email", id: "email", onChange: props.onChange }),
    React.createElement("input", { type: "password", name: "password", placeholder: "Password", id: "password", onChange: props.onChange }),
    React.createElement("input", { type: "submit", value: "Next", onClick: props.onClick })
  )
);

const FormTwo = props => React.createElement(
  "div",
  { id: "formTwo" },
  React.createElement(
    "form",
    null,
    " Shipping Information ",
    React.createElement("br", null),
    React.createElement("input", { type: "text", name: "firstLine", id: "firstLine", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "secondLine", id: "secondLine", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "city", placeholder: "enter your city", id: "city", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "state", placeholder: "enter your state", id: "state", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "zipcode", placeholder: "enter your zipcode", id: "zipcode", onChange: props.onChange }),
    React.createElement("input", { type: "submit", value: "Next", onClick: props.onClick })
  )
);

const FormThree = props => React.createElement(
  "div",
  { id: "formThree" },
  React.createElement(
    "form",
    null,
    " Credit Card Confirmation ",
    React.createElement("br", null),
    React.createElement("input", { type: "text", name: "creditCard", id: "creditCard", placeholder: "Credit Card Number", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "expirationDate", id: "expiration", placeholder: "XX/XX", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "CVV", id: "CVV", placeholder: "CVV", onChange: props.onChange }),
    React.createElement("input", { type: "text", name: "billingZip", id: "billingZip", placeholder: "Zip", onChange: props.onChange }),
    React.createElement("input", { type: "submit", value: "Next", onClick: props.onClick, onChange: props.onChange })
  )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAyLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImZsb3ciLCJDaGVja291dCIsIkZvcm1PbmUiLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiU3VtbWFyeSIsImN1cnJlbnRWaWV3IiwiY3VycmVudEZvcm0iLCJoYW5kbGVOZXh0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRm9ybUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld0Zvcm0iLCJuYW1lIiwicmVuZGVyIiwib25DbGljayIsIm9uQ2hhbmdlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVGLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLENBQUNDLFFBQUQsRUFBV0MsT0FBWCxFQUFvQkMsT0FBcEIsRUFBNkJDLFNBQTdCLEVBQXdDQyxPQUF4QyxDQURLO0FBRVhDLG1CQUFhTCxRQUZGO0FBR1hNLG1CQUFhO0FBSEYsS0FBYjtBQUtDOztBQUVEQyxlQUFhO0FBQ1gsU0FBS0MsUUFBTCxDQUFjO0FBQ1pILG1CQUFhLEtBQUtQLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JVLE9BQWhCLENBQXdCLEtBQUtYLEtBQUwsQ0FBV08sV0FBbkMsSUFBa0QsQ0FBbEQsSUFBdUQsQ0FBdkU7QUFERCxLQUFkO0FBR0Q7O0FBRURLLGlCQUFlLENBRWQ7O0FBRURDLG1CQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsUUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFFBQUlFLFVBQVUsS0FBS2pC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WixFQUFtQixNQUFLLEtBQXhCLEVBQThCLElBQUcsS0FBakMsRUFBdUMsYUFBWSxLQUFuRCxFQUF5RCxVQUFVdEIsTUFBTXNCLFFBQXpFLEdBSEY7QUFJRSxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFxQyxJQUFHLFlBQXhDLEVBQXFELGFBQVksS0FBakUsRUFBdUUsVUFBVXRCLE1BQU1zQixRQUF2RixHQUpGO0FBS0UsbUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsU0FBU3RCLE1BQU1xQixPQUFqRCxFQUEwRCxVQUFVckIsTUFBTXNCLFFBQTFFO0FBTEY7QUFERixDQURGOztBQWVBQyxTQUFTSCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJJLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgZmxvdzogW0NoZWNrb3V0LCBGb3JtT25lLCBGb3JtVHdvLCBGb3JtVGhyZWUsIFN1bW1hcnldLFxuICAgIGN1cnJlbnRWaWV3OiBDaGVja291dCxcbiAgICBjdXJyZW50Rm9ybToge31cbiAgfVxuICB9XG5cbiAgaGFuZGxlTmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWaWV3OiB0aGlzLnN0YXRlLmZsb3dbdGhpcy5zdGF0ZS5mbG93LmluZGV4T2YodGhpcy5zdGF0ZS5jdXJyZW50VmlldykgKyAxIHx8IDBdXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG5cbiAgfVxuXG4gIGhhbmRsZUZvcm1DaGFuZ2UoZSkge1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBuZXdGb3JtID0gdGhpcy5zdGF0ZS5jdXJyZW50Rm9ybTtcbiAgICBuZXdGb3JtW2UudGFyZ2V0Lm5hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50Rm9ybTogbmV3Rm9ybVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDx0aGlzLnN0YXRlLmN1cnJlbnRWaWV3IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlRm9ybUNoYW5nZShlKX0gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZU5leHQoZSl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBDaGVja291dCA9IHByb3BzID0+IChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PkNoZWNrb3V0PC9idXR0b24+XG4pXG5cbmNvbnN0IEZvcm1PbmUgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm1PbmVcIj5cbiAgICAgIDxmb3JtPiBBY2NvdW50IEluZm9ybWF0aW9uIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0vPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGlkPVwiZW1haWxcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17cHJvcHMub25DbGlja30vPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG5cbmNvbnN0IEZvcm1Ud28gPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm1Ud29cIj5cbiAgICAgIDxmb3JtPiBTaGlwcGluZyBJbmZvcm1hdGlvbiA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TGluZVwiIGlkPVwiZmlyc3RMaW5lXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWNvbmRMaW5lXCIgaWQ9XCJzZWNvbmRMaW5lXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIGNpdHlcIiBpZD1cImNpdHlcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIHN0YXRlXCIgaWQ9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0vPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciB6aXBjb2RlXCIgaWQ9XCJ6aXBjb2RlXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17cHJvcHMub25DbGlja30vPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBGb3JtVGhyZWUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgaWQ9XCJmb3JtVGhyZWVcIj5cbiAgICA8Zm9ybT4gQ3JlZGl0IENhcmQgQ29uZmlybWF0aW9uIDxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdENhcmRcIiBpZD1cImNyZWRpdENhcmRcIiBwbGFjZWhvbGRlcj1cIkNyZWRpdCBDYXJkIE51bWJlclwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0vPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyYXRpb25EYXRlXCIgaWQ9XCJleHBpcmF0aW9uXCIgcGxhY2Vob2xkZXI9XCJYWC9YWFwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0vPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIkNWVlwiIGlkPVwiQ1ZWXCIgcGxhY2Vob2xkZXI9XCJDVlZcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgaWQ9XCJiaWxsaW5nWmlwXCIgcGxhY2Vob2xkZXI9XCJaaXBcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17cHJvcHMub25DbGlja30gb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfS8+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19