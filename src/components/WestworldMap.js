import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';

const areaUrl = 'http://localhost:4000/areas';

class WestworldMap extends Component {
  state = {
    areas: []
  };

  componentDidMount() {
    fetch(areaUrl)
      .then(res => res.json())
      .then(areas => {
        this.setState({
          areas
        });
      });
  }

  render() {
    let areasMap = this.state.areas.map(area => {
      let {id, name, limit, auth_req} = area
      let hostArr = this.props.hostsData.filter(host => host.area === name)
      return (
      <Area key={id} name={name} limit={limit} auth_req={auth_req} hosts={hostArr} />
    )
  }
    );
    return <Segment id="map">{areasMap}</Segment>;
  }
}

export default WestworldMap;
