import { Flex, Switch } from '../../';
import { styles } from '../app';

export default class SwitchPage extends React.Component {
  state = {
    hideFlexSystem: true,
    toggle2: true,
    toggle3: true,
    toggle4: true,
    toggle5: true,
    toggle6: true,
    toggle7: true,
    toggle8: true,
  }
  render() {
    const {
      hideFlexSystem, toggle2, toggle3, toggle4,
      toggle5, toggle6, toggle7, toggle8,
    } = this.state;
    return (
      <React.Fragment>
        <Flex style={styles.row} align='end'>
          <Switch
            value={hideFlexSystem}
            type='plain'
            style={styles.item}
            onChange={hideFlexSystem => {
              this.setState({ hideFlexSystem });
            }}
          />
          <Switch
            value={toggle2}
            style={styles.item}
            onChange={toggle2 => {
              this.setState({ toggle2 });
            }}
          />
          <Switch
            type='danger'
            value={toggle3}
            style={styles.item}
            onChange={toggle3 => {
              this.setState({ toggle3 });
            }}
          />
          <Switch
            type='warning'
            value={toggle4}
            style={styles.item}
            onChange={toggle4 => {
              this.setState({ toggle4 });
            }}
          />
          <Switch
            style={styles.item}
            disabled={true}
            onChange={hideFlexSystem => {
              this.setState({ hideFlexSystem });
            }}
          />
        </Flex>
        <Flex style={styles.row} align='end'>
          <Switch
            value={toggle5}
            type='plain'
            square={true}
            style={styles.item}
            onChange={toggle5 => {
              this.setState({ toggle5 });
            }}
          />
          <Switch
            value={toggle6}
            square={true}
            style={styles.item}
            onChange={toggle6 => {
              this.setState({ toggle6 });
            }}
          />
          <Switch
            type='danger'
            square={true}
            value={toggle7}
            defaultMouce={true}
            style={styles.item}
            onChange={toggle7 => {
              this.setState({ toggle7 });
            }}
          />
          <Switch
            type='warning'
            square={true}
            value={toggle8}
            defaultMouce={true}
            style={styles.item}
            onChange={toggle8 => {
              this.setState({ toggle8 });
            }}
          />
          <Switch
            square={true}
            style={styles.item}
            disabled={true}
            onChange={hideFlexSystem => {
              this.setState({ hideFlexSystem });
            }}
          />
        </Flex>
      </React.Fragment>
    )
  }
}