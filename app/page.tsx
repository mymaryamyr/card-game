import CardList from './components/card-list/CardList';

export default function Home() {
	const monsters = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			{monsters && <CardList monsters={monsters} />}
		</main>
	);
}
