import styled from 'styled-components';

export default function Actions(props) {
	const {
		flashcardStatus,
		flashcard,
		setCardsDone,
		cardsDone,
		zappedCards,
		setZappedCards,
		setClickedCard,
		setAnswer,
	} = props;

	const ERRORCOLOR =
		'invert(29%) sepia(86%) saturate(2812%) hue-rotate(342deg) brightness(96%) contrast(106%)';
	const ALMOSTCOLOR =
		'invert(67%) sepia(48%) saturate(1583%) hue-rotate(334deg) brightness(98%) contrast(106%)';
	const ZAPCOLOR =
		'invert(55%) sepia(10%) saturate(3367%) hue-rotate(72deg) brightness(106%) contrast(90%)';

	function buttonClick(flashcard, status, color) {
		if (flashcard.status === '') {
			flashcardStatus(flashcard, status, color);
			setCardsDone(cardsDone + 1);
			if (status === 'zap') {
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
				onClick={() => buttonClick(flashcard, 'error', ERRORCOLOR)}
				display={flashcard.status === '' || flashcard.status === 'error' ? 'flex' : 'none'}>
				Não lembrei
			</ErrorButton>
			<AlmostButton
				onClick={() => buttonClick(flashcard, 'almost', ALMOSTCOLOR)}
				display={flashcard.status === '' || flashcard.status === 'almost' ? 'flex' : 'none'}>
				Quase não lembrei
			</AlmostButton>
			<ZapButton
				onClick={() => buttonClick(flashcard, 'zap', ZAPCOLOR)}
				display={flashcard.status === '' || flashcard.status === 'zap' ? 'flex' : 'none'}>
				Zap!
			</ZapButton>
		</ActionsDiv>
	);
}

const ActionsDiv = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	margin-top: 15px;
`;

const Button = styled.button`
	border: transparent;
	width: 100%;
	height: 40px;
	background-color: green;
	color: white;
	font-size: 12px;
	font-weight: 700;
	border-radius: 5px;
	cursor: pointer;
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;
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