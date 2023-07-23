import Image from '@/node_modules/next/image';
import style from './Card.module.css';

const Card = ({ id }) => (
	<div className={style.cardContainer}>
		<Image
			alt='monster'
			className={style.cardImg}
			width='180'
			height='180'
			src={`https://robohash.org/${id}?set=set2size=180x180`}
		/>
	</div>
);

export default Card;
