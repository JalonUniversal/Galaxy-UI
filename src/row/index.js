import './style.less';
const Row = props => {
    const { children, ...rest } = props;
    return (
        <div className='galaxy-row' {...rest}>{ children }</div>
    )
}

export { Row }