import styled from 'styled-components';

export default function Actions(props) {
	const {
		i,
		setCardsDone,
		cardsDone,
		zappedCards,
		setZappedCards,
		setClickedCard,
		setAnswer,
		setColor,
		setStatus,
		status,
		iconState,
		setIconState,
	} = props;

	function flashcardStatus(newStatus, newColor) {
		const newIconState = [...iconState];
		newIconState[i] = newStatus;

		setIconState(newIconState);
		setStatus(newStatus);
		setColor(newColor);
		setClickedCard('');
		setAnswer('');
	}

	const ERRORCOLOR =
		'invert(29%) sepia(86%) saturate(2812%) hue-rotate(342deg) brightness(96%) contrast(106%)';
	const ALMOSTCOLOR =
		'invert(67%) sepia(48%) saturate(1583%) hue-rotate(334deg) brightness(98%) contrast(106%)';
	const ZAPCOLOR =
		'invert(55%) sepia(10%) saturate(3367%) hue-rotate(72deg) brightness(106%) contrast(90%)';

	function buttonClick(newStatus, newColor) {
		if (status === '') {
			flashcardStatus(newStatus, newColor);
			setCardsDone(cardsDone + 1);
			if (newStatus === 'zap') {
				setZappedCards(zappedCards + 1);
			}
		} else {
			setClickedCard('');
			setAnswer('');
		}
	}
	return (
		<ActionsDiv>
			<ErrorButton
				onClick={() => buttonClick('error', ERRORCOLOR)}
				display={status === '' || status === 'error' ? 'flex' : 'none'}
				data-identifier="forgot-btn">
				Não lembrei
			</ErrorButton>
			<AlmostButton
				onClick={() => buttonClick('almost', ALMOSTCOLOR)}
				display={status === '' || status === 'almost' ? 'flex' : 'none'}
				data-identifier="almost-forgot-btn">
				Quase não lembrei
			</AlmostButton>
			<ZapButton
				onClick={() => buttonClick('zap', ZAPCOLOR)}
				display={status === '' || status === 'zap' ? 'flex' : 'none'}
				data-identifier="zap-btn">
				Zap!
			</ZapButton>
		</ActionsDiv>
	);
}

const ActionsDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	margin-top: 15px;
`;

const Button = styled.button`
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;
	border: transparent;
	width: 100%;
	height: 40px;
	color: white;
	font-size: 12px;
	font-weight: 700;
	border-radius: 5px;
	cursor: pointer;
	outline: none;
	&:hover {
		filter: brightness(0.7);
	}
`;

const ErrorButton = styled(Button)`
	background-color: #ff3030;
`;

const AlmostButton = styled(Button)`
	background-color: #ff922e;
`;

const ZapButton = styled(Button)`
	background-color: #2fbe34;
`;
