import { auth, signOut } from '@/auth';

const page = async () => {
	const session = await auth();

	return (
		<>
			{JSON.stringify(session)}
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<button type="submit">Sign Out</button>
			</form>
		</>
	);
};

export default page;
