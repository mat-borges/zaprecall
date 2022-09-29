import { useState } from 'react';
import styled from 'styled-components';
import turnCard from '../../../assets/img/setinha.png';
import Actions from './Actions.js';

export default function ShowFlashcard(props) {
	const {
		flashcard,
		setCardsDone,
		cardsDone,
		zappedCards,
		setZappedCards,
		setClickedCard,
		setAnswer,
		i,
		clickedCard,
		setIcon,
		answer,
		iconState,
		setIconState,
	} = props;

	const [status, setStatus] = useState('');
	const [color, setColor] = useState('');

	if (clickedCard !== i) {
		return (
			<Flashcard key={i} onClick={() => setClickedCard(i)}>
				<QuestionId color={color} decoration={status !== '' ? 'line-through' : 'none'}>
					Pergunta {i + 1}
				</QuestionId>
				<Icon src={setIcon(status)} alt="" color={color} />
			</Flashcard>
		);
	} else if (clickedCard === i && answer !== i) {
		return (
			<FlashcardAberto key={i}>
				<p>{flashcard.question}</p>
				<div>
					<img src={turnCard} alt="" onClick={() => setAnswer(i)} />
				</div>
			</FlashcardAberto>
		);
	} else if (clickedCard === i && answer === i) {
		return (
			<FlashcardAberto key={i}>
				<p>{flashcard.answer}</p>
				<Actions
					i={i}
					flashcard={flashcard}
					setCardsDone={setCardsDone}
					cardsDone={cardsDone}
					zappedCards={zappedCards}
					setZappedCards={setZappedCards}
					setClickedCard={setClickedCard}
					setAnswer={setAnswer}
					setColor={setColor}
					setStatus={setStatus}
					status={status}
					iconState={iconState}
					setIconState={setIconState}
				/>
			</FlashcardAberto>
		);
	}
}

const Flashcard = styled.div`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	margin: 10px 0px;
	padding: 10px 10px;
	cursor: pointer;
	font-family: 'Recursive', cursive;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
`;

const QuestionId = styled.p`
	filter: ${(props) => props.color};
	text-decoration: ${(props) => props.decoration};
`;

const FlashcardAberto = styled(Flashcard)`
	min-height: 130px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: #ffffd4;
	cursor: default;
	padding: 20px 10px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	div {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	img {
		cursor: pointer;
	}
	p {
		line-height: 22px;
	}
`;

const Icon = styled.img`
	filter: ${(props) => props.color};
	width: 23px;
	height: 23px;
`;
