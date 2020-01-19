import { Flex, Select } from '../../';
import { styles } from '../app';

export default class SelectPage extends React.Component {
  options = [
    { label: 'Time Only Lonly Field', value: '19:00' },
    { label: 'Date', value: '18:00' },
  ]
  handleChange = val => {
    console.log('val: ', val);
  }
  render() {
    return (
      <React.Fragment>
        <Flex style={styles.row} align='end'>
          <Select width={120} options={this.options} onChnage={this.handleChange} />
        </Flex>
      </React.Fragment>
    )
  }
}