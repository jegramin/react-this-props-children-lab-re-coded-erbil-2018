import React from 'react';

class ThemedDecorations extends React.Component {

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, children => React.cloneElement(children, {
      className: this.props.theme,
    }));

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}

export default ThemedDecorations;