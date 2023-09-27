import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'

export default function User({ user }) {
	const { query } = useRouter()

	return (
		<MainContainer keywords={user.name}>
			<div>
				{user.id}. User - {user.name}
			</div>
		</MainContainer>
	)
}

export const getServerSideProps = async ({ params }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	)
	const user = await response.json()
	return {
		props: { user },
	}
}
