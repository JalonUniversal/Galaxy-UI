import './style.less';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
const lg = console.log;

class Calc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: Number(props.value) || 0
    }
    this.inputType = /\d/
    this.callback = props.onChange
  }
  // change event
  handleChange = evt => {
    let value = Number(evt.target.value);
    const { max, min } = this.props;
    if (
      (max !== undefined && value > max) ||
      (min !== undefined && value < min)
    ) return;
    if (typeof value !== 'number' || !this.inputType.test(value)) value = 0;
    this.setState({ value });
  }
  // plus
  handlePlus = () => {
    const { max } = this.props;
    const value = this.state.value + 1;
    if (max !== undefined && value > max) return;
    this.setState({ value }, () => {
      this.callback && this.callback(this.state.value);
    });
  }
  // minus
  handleMinus = () => {
    const { min } = this.props;
    const value = this.state.value - 1;
    if (min !== undefined && value < min) return;
    this.setState({ value }, () => {
      this.callback && this.callback(this.state.value);
    });
  }
  render() {
    const { value } = this.state;
    const {
      type = 'primary',
      width = 80,
      radius = false,
      editable = true,
      disabled = false
    } = this.props;
    const containerCls = classNames(
      'calc-container',
      `calc-container-${type}`,
      radius ? 'calc-radius' : null
    )
    const calcBtnCls = classNames(
      'calc-button',
      disabled ? 'calc-button-diabled' : null
    )
    return (
      <div
        className={containerCls}
        style={{ width }}
      >
        <FaMinusSquare
          className={calcBtnCls}
          onClick={disabled ? null : this.handleMinus}
        />
        <input
          accept={/\d+/}
          value={value}
          disabled={!editable}
          onChange={this.handleChange}
          className='calc-input-center'
        />
        <FaPlusSquare
          className={calcBtnCls}
          onClick={disabled ? null : this.handlePlus}
        />
      </div>
    )
  }
}

Calc.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'plain']),
  value: PropTypes.number,
  editable: PropTypes.boolean || undefined,
  disabled: PropTypes.boolean,
  min: PropTypes.number,
  max: PropTypes.number,
  // radius: PropTypes.boolean,
  onChange: PropTypes.func
}

export { Calc }