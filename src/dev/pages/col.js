import { Flex, Row, Col } from '../../';
import { styles } from '../app';

export default class ColPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Flex>Grid System</Flex>
        <Flex
          direction='column'
          justify='center'
          align='center'
          style={{ width: '100%' }}
        >
          <Row style={styles.row}>
            <Col span={24} style={{ ...styles.col, background: '#27ae60' }} >100%</Col>
          </Row>
          <Row style={styles.row}>
            <Col span={12} style={{ ...styles.col, background: '#27ae60' }} >50%</Col>
            <Col span={12} style={{ ...styles.col, background: '#2ecc71' }} >50%</Col>
          </Row>
          <Row style={styles.row}>
            <Col span={8} style={{ ...styles.col, background: '#2ecc71' }} >33.33%</Col>
            <Col span={8} style={{ ...styles.col, background: '#27ae60' }} >33.33%</Col>
            <Col span={8} style={{ ...styles.col, background: '#2ecc71' }} >33.33%</Col>
          </Row>
          <Row style={styles.row}>
            <Col span={6} style={{ ...styles.col, background: '#2ecc71' }} >25%</Col>
            <Col span={6} style={{ ...styles.col, background: '#27ae60' }} >25%</Col>
            <Col span={6} style={{ ...styles.col, background: '#2ecc71' }} >25%</Col>
            <Col span={6} style={{ ...styles.col, background: '#27ae60' }} >25%</Col>
          </Row>
          <Row style={styles.row}>
            <Col span={18} style={{ ...styles.col, background: '#2ecc71' }} >66.66%</Col>
            <Col span={8} style={{ ...styles.col, background: '#27ae60' }} >33.33%</Col>
          </Row>
        </Flex>
      </React.Fragment>
    )
  }
}