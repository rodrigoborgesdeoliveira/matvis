import CanvasComponent from "./components/canvas";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      t: 0,
      inoutVector: false,
      determinant: false,
      eigenvectors: false,
      snapToGrid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleInoutVector = this.toggleInoutVector.bind(this);
    this.toggleDeterminant = this.toggleDeterminant.bind(this);
    this.toggleEigenvectors = this.toggleEigenvectors.bind(this);
    this.toggleSnapToGrid = this.toggleSnapToGrid.bind(this);
  }

  handleChange(event) {
    this.setState({t: event.target.value});
  }

  toggleInoutVector(event) {
    this.setState({inoutVector: event.target.checked});
  }

  toggleDeterminant(event) {
    this.setState({determinant: event.target.checked});
  }

  toggleEigenvectors(event) {
    this.setState({eigenvectors: event.target.checked});
  }

  toggleSnapToGrid(event) {
    this.setState({snapToGrid: event.target.checked});
  }

  render() {
    return (
      <div id="mainContainer" className="container">
        <h4>
          <a href="https://youtu.be/kYB8IZa5AuE">
            Linear Transformation Visualizer - Inspired by 3Blue1Brown
          </a>
        </h4>

        <ReactBootstrap.Panel>
          <CanvasComponent
            t={this.state.t}
            inoutVector={this.state.inoutVector}
            determinant={this.state.determinant}
            eigenvectors={this.state.eigenvectors}
            snapToGrid={this.state.snapToGrid}
            scale={60} />

          <ReactBootstrap.Form horizontal>
            <ReactBootstrap.Col componentClass={ReactBootstrap.ControlLabel} sm={1}>
              t: ({this.state.t})
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={11}>
              <ReactBootstrap.FormControl type="range" min={0} max={1} step={0.01}
                value={this.state.t} onChange={this.handleChange} />
            </ReactBootstrap.Col>

            <ReactBootstrap.Col sm={2}>
              <ReactBootstrap.Checkbox checked={this.state.inoutVector}
                onChange={this.toggleInoutVector}>Show In/Out Vector</ReactBootstrap.Checkbox>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={2}>
              <ReactBootstrap.Checkbox checked={this.state.determinant}
                onChange={this.toggleDeterminant}>Show Determinant</ReactBootstrap.Checkbox>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={2}>
              <ReactBootstrap.Checkbox checked={this.state.eigenvectors}
                onChange={this.toggleEigenvectors}>Show Eigenvectors</ReactBootstrap.Checkbox>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={2}>
              <ReactBootstrap.Checkbox checked={this.state.snapToGrid}
                onChange={this.toggleSnapToGrid}>Snap to Grid</ReactBootstrap.Checkbox>
            </ReactBootstrap.Col>
          </ReactBootstrap.Form>
        </ReactBootstrap.Panel>

        <h4>Instructions</h4>
        <ul>
          <li>Drag the green and red targets to set in the transformed basis vectors.</li>
          <li>Drag the t slider to visualize the transformation.</li>
          <li>Enable the In/Out Vector to show a vector and its corresponding visualization.</li>
          <li>Enable the Determinant to show the determinant in the visualization.</li>
          <li>Enable the Eigenvectors to show the eigenvectors in the visualization.</li>
        </ul>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
