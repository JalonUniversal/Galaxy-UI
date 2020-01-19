import './style.css';
const Col = props => {
  const { span = 24, ...rest } = props;
  const colCls = classNames(
    'galaxy-col',
    `galaxy-col-${span}`
  )
  return (
    <div className={colCls} {...rest}>
      {props.children}
    </div>
  )
}

Col.propTypes = {
  span: PropTypes.oneOf([
    24, 18, 12, 8, 6,
    '24', '18', '12', '8', '6',
  ]),
  onPress: PropTypes.func
}

export { Col }