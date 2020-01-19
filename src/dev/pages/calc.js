import { Row, Col, Calc } from '../../';

export default class CalcPage extends React.Component {
  render() {
    return <React.Fragment>
      <Row>
        <Col span='6'>
          <Calc />
        </Col>
        <Col span='6'>
          <Calc type='info' max={10} min={0} />
        </Col>
        <Col span='6'>
          <Calc type='danger' radius={true} editable={false} />
        </Col>
        <Col span='6'>
          <Calc type='warning' radius={true} disabled={true} />
        </Col>
      </Row>
    </React.Fragment>
  }
}