import CardList from './components/card-list/CardList';

export default function Home() {
	const monsters = [
		{
			id: 1,
			url: 1,
			available: true,
		},
		{
			id: 2,
			url: 2,
			available: true,
		},
		{
			id: 3,
			url: 5,
			available: true,
		},
		{
			id: 4,
			url: 4,
			available: true,
		},
		{
			id: 5,
			url: 8,
			available: true,
		},
		{
			id: 6,
			url: 9,
			available: true,
		},
		{
			id: 7,
			url: 1,
			available: true,
		},
		{
			id: 8,
			url: 2,
			available: true,
		},
		{
			id: 9,
			url: 5,
			available: true,
		},
		{
			id: 10,
			url: 4,
			available: true,
		},
		{
			id: 11,
			url: 8,
			available: true,
		},
		{
			id: 12,
			url: 9,
			available: true,
		},
	];
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-10'>
			{monsters && <CardList monsters={monsters} />}
		</main>
	);
}
