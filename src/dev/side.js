import { withRouter, NavLink } from 'react-router-dom';
import { Flex } from '../index';
import { components } from './route';

class Side extends React.Component {
  render() {
    return (
      <Flex className='side-show'>
        {
          components.map((comp, idx) => {
            return (
              <NavLink
                key={idx}
                to={comp.path}
                className='display-component-card'
                activeClassName='display-component-card-active'
              >
                {comp.name}
              </NavLink>
            )
          })
        }
      </Flex>
    )
  }
}

export default withRouter(Side);
