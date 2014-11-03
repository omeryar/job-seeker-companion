/**  @jsx React.DOM */

var JSC = React.createClass( {
  render: function() {
    return (<div>Test</div>);
  }
} );


React.renderComponent(
    <JSC />,
    document.getElementById( 'mainContainer' )
);