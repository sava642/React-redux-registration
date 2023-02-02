const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
};

export default function Home() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>
				Home page
			</h1>
		</div>
	);
}
