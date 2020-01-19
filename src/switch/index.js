import './style.less';

class Switch extends React.PureComponent {
	constructor(props) {
		super(props);
		const { value = false, onChange = () => { } } = this.props;
		// this.state = {
		// 	checked: value
		// }
		this.changeCallBack = onChange;
	}
	// toggle checked status
	toggleChange = (e) => {
		e.stopPropagation();
		const { value } = this.props;
		this.changeCallBack(!value);
	}
	render() {
		const {
			value,
			type = 'primary',
			disabled = false,
			square = false,
			defaultMouce = false,
			style
		} = this.props;
		const switchCls = classNames(
			'switch',
			value ? `switch-active-${type}` : null,
			square ? `switch-square` : null
		)
		const gutterCls = classNames(
			'switch-gutter',
			value ? 'switch-gutter-active' : null,
			square ? 'switch-gutter-square' : null
		);
		const ballCls = classNames(
			'switch-ball',
			value ? 'switch-ball-active' : null,
			disabled ? 'switch-disabled' : null,
			square ? `switch-ball-square` : null,
			defaultMouce ? 'default-mouse' : null
		);
		return (
			<div
				className={switchCls}
				onClick={disabled ? null : this.toggleChange}
				style={style}
			>
				<span className={gutterCls} />
				<span className={ballCls} />
			</div>
		)
	}
}

Switch.propTypes = {
	value: PropTypes.bool,
	type: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'plain']),
	disabled: PropTypes.bool,
	square: PropTypes.bool,
	onChange: PropTypes.func,
	defaultMouce: PropTypes.bool,
	style: PropTypes.object
}

export { Switch }