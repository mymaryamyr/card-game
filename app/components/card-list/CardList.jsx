import Card from '../card/Card';
import style from './CardList.module.css';

export default function CardList({ monsters }) {
	return (
		<div className={style.cardList}>
			{monsters.map((id) => (
				<Card key={id} id={id} />
			))}
		</div>
	);
}
