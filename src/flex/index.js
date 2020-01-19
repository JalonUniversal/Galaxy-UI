import './style.css';

const Flex = props => {
  const {
    direction = 'row',
    justify = 'center',
    align = 'center',
    ...rest
  } = props;
  const flexCls = classNames(
    'galaxy-flex',
    `galaxy-flex-${direction}`,
    `galaxy-flex-justify-${justify}`,
    `galaxy-flex-align-${align}`,
  );
  return (
    <div className={flexCls} {...rest}>
      {props.children}
    </div>
  )
}

Flex.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf([
    'space-between', 'space-around', 'space-evenly',
    'start', 'center', 'end'
  ]),
  align: PropTypes.oneOf([
    'baseline', 'strech',
    'start', 'center', 'end',
    'self-start', 'self-end'
  ]),
}

export { Flex }