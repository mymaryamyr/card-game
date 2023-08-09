'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';
import style from './CardList.module.css';

export default function CardList({ monsters }) {
	const [fliped, setFliped] = useState([]);
	const [score, setScore] = useState(0);
	const [matchedItems, setMatchedItems] = useState([]);
	const [isFirstTime, setIsFirstTime] = useState(true);
	const [modifiedMonsters, setModifiedMonsters] = useState([]);
	const [status, setStatus] = useState('show');

	const timeout = useRef(null);

	const evaluate = (monster) => {
		setFliped([...fliped, monster]);
		if (fliped[0].url === monster.url) {
			setMatchedItems([...matchedItems, monster]);
			setScore(score + 1);
			setModifiedMonsters(
				modifiedMonsters.map((monster) => {
					if (monster.url === fliped[0].url) {
						return {
							...monster,
							available: false,
						};
					} else {
						return monster;
					}
				})
			);
			return;
		}
		// Flip cards after a 500ms duration
		timeout.current = setTimeout(() => {
			setFliped([]);
		}, 500);
	};

	const checkIsFlipped = (id) => {
		const flipedIds = Array.from(fliped, (f) => f.id);
		return flipedIds.includes(id);
	};

	function selectCard(monster) {
		if (isFirstTime) {
			setFliped([monster]);
			setIsFirstTime(false);
		} else {
			setTimeout(evaluate(monster), 500);
			// clearTimeout(timeout.current);
			setIsFirstTime(true);
		}
	}

	let cardsTimeout;

	function tryAgain() {
		setModifiedMonsters(monsters.toSorted(() => 0.5 - Math.random()));
		setMatchedItems([]);
		setStatus('show');
		clearTimeout(cardsTimeout);
		cardsTimeout = setTimeout(() => {
			setStatus('hide');
		}, 3000);
		setScore(0);
		setFliped([]);
	}

	return (
		<>
			<button onClick={tryAgain} className={style.button}>
				{modifiedMonsters.length ? 'Shuffle' : 'Start'}
			</button>
			<h2 className='flex-auto'>Score: {score}</h2>
			<br />
			<div className={style.cardList}>
				{modifiedMonsters.map((m, index) => (
					<Card
						key={index}
						monster={m}
						onClick={() => selectCard(m)}
						isFlipped={checkIsFlipped(m.id)}
						status={status}
					/>
				))}
			</div>
		</>
	);
}
