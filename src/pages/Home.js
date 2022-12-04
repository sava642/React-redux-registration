const styles = {
	container: {
		minHeight: 'calc(100vh - 50px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
	},
};

export default function Home() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>
				Привет, кумец, дзырь как сделал...

			</h1>
		</div>
	);
}
