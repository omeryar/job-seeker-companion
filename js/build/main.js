/**  @jsx React.DOM */

var JSC = React.createClass( {displayName: 'JSC',
  render: function() {
    return (React.DOM.div(null, "Test"));
  }
} );


React.renderComponent(
    JSC(null),
    document.getElementById( 'mainContainer' )
);