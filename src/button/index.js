import { Flex } from '../flex';
import './style.less';

const Button = props => {
	const {
		type = 'primary',
		disabled = false,
		radius = false,
		round = false,
		size ='middle',
		onClick,
		style
	} = props;
	const btnClass = classNames(
		"glaxy-button", 
		`galaxy-ui-${type}`,
		`galaxy-button-${size}`, 
		radius ? 'galaxy-radius' : null,
		round ? `galaxy-round-${size}` : null,
		disabled ? 'galaxy-behavior-ban' : null
	);
	return (
		<Flex 
			onClick={onClick} 
			className={btnClass}
			style={style}
		>
			{ props.children }
		</Flex>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'plain']),
	size: PropTypes.oneOf(['small', 'middle', 'large']),
	round: PropTypes.bool,
	radius: PropTypes.bool,
	onClick: PropTypes.func,
	style: PropTypes.object
}

export { Button }
