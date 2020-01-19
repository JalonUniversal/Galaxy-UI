import { Row, Col, Slider } from '../../';

export default class SliderPage extends React.Component {
  render() {
    return <React.Fragment>
      <Row>
        <Col span={12}>
          {/* <Slider type='info' /> */}
        </Col>
        <Col span={12}>
          <Slider type='warning' onChange={(v) => console.log(v)} />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          {/* <Slider type='danger' /> */}
        </Col>
        <Col span={12}>
          <Slider type='disabled' />
        </Col>
      </Row>
    </React.Fragment>
  }
}