import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		color: "white",
		fontSize: "22px",
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
