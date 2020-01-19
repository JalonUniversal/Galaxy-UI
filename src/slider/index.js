import './style.less';

class Slider extends React.PureComponent {
  constructor(props) {
    const { value = 0, type = 'primary', onChange = null } = props;
    super(props);
    this.wrapper = null;
    this.ball = null;
    this.ballXPos = 0;
    this.enableSlide = false;
    this.moveCallBack = onChange;
    this.state = {
      type,
      width: value + '%' || '0%',
      left: value + '%' || '0%',
    }
  }
  ballMouseDown = (e) => {
    e.preventDefault();
    this.enableSlide = true;
  }
  ballMouseUp = (e) => {
    e.preventDefault();
    this.enableSlide = false;
    this.ball.onmousemove = null;
  }
  ballMouseMove = e => {
    if (!this.enableSlide) return;
    // 获取x和y
    let nx = e.clientX;
    let val = (nx / this.wrapper.clientWidth);
    if (val >= 1) return;
    val = (val * 100).toFixed(3);
    const width = val + '%';
    // 计算移动后的左偏移量
    let left = nx - (this.ball.clientWidth / 2);
    // this.ball.style.left = nl + 'px';
    this.setState({ width, left }, () => {
      this.moveCallBack && this.moveCallBack(Math.ceil(val));
    });
  }
  render() {
    const { width, left, type } = this.state;
    const lineCls = classNames(
      'slider-line-value',
      `slider-line-${type}`
    );
    const ballCls = classNames(
      'slider-ball',
      `slider-ball-${type}`
    );
    return (
      <section
        // className={btnClass}
        ref={dom => this.wrapper = dom}
        onMouseMove={this.ballMouseMove}
        onMouseDown={this.ballMouseDown}
        onMouseUp={this.ballMouseUp}
        // className='slider-container'
        className={'slider-container'}
      >
        <span className={lineCls} style={{ width }} />
        <div className='slider-line' >
          <div
            ref={dom => this.ball = dom}
            className={ballCls}
            style={{ left }}
          />
        </div>
      </section>
    )
  }
}

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}

export { Slider }