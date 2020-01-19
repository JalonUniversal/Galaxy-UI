import './style.less';

class Select extends React.Component {
  constructor(props) {
    super(props);
    const { placeholder = '请选择', options = [], defaultSelectIndex = -1 } = props;
    this.placeholder = placeholder;
    this.state = {
      showMenu: false,
      currentIndex: defaultSelectIndex,
      list: options
    }
    this.__renderCurrentItem(defaultSelectIndex, options);
  }
  toggleMenuShow = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }
  // 展示当前文本
  __renderCurrentItem = (currentIndex, list) => {
    return currentIndex === -1 ? this.placeholder : list[currentIndex]['label'];
  }
  // 选中某项
  pickThis = (currentIndex, index, onChnage) => {
    if (index === currentIndex) return;
    this.setState({ currentIndex: index }, () => {
      onChnage && onChnage(this.state.list[index]);
    });
  }
  render() {
    const { showMenu, list, currentIndex } = this.state;
    const { width = 90, type = 'primary', onChnage = null } = this.props;
    const listCls = classNames(
      'galaxy-select-box',
      showMenu ? null : 'galaxy-select-box-hide'
    )
    const itemCls = classNames(
      'galaxy-select-item',
      `galaxy-select-${type}`
    )
    return (
      <div
        className='galaxy-select-wrapper'
        onClick={this.toggleMenuShow}
        style={{ width }}
      >
        <span className='galaxy-select-display'>
          <span className='galaxy-select-content'>
            {this.__renderCurrentItem(currentIndex, list)}
          </span>
        </span>
        <ul className={listCls} >
          {
            list.map((item, index) => {
              return (
                <li
                  key={index}
                  className={itemCls}
                  onClick={() => {
                    this.pickThis(currentIndex, index, onChnage);
                  }}
                >
                  <span className='galaxy-select-content'>{item.label}</span>
                </li>
              )
            })
          }
        </ul>
      </div >
    )
  }
}

export { Select }