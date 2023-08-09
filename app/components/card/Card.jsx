import Image from '@/node_modules/next/image';
import { useEffect, useState } from 'react';
import style from './Card.module.css';

export default function Card({ monster, onClick, isFlipped, status }) {
	return (
		<div
			className={`${style.cardContainer} ${
				!monster.available && style.matched
			} ${style.status}`}>
			<Image
				onClick={() => {
					onClick();
				}}
				alt='monster'
				className={`${style.cardImg} ${
					(isFlipped || status === 'show') && style.show
				}`}
				width='180'
				height='180'
				src={`https://robohash.org/${monster.url}?set=set2size=180x180`}
			/>
		</div>
	);
}
