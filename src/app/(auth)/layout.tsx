const layout = ({ children }: { children: JSX.Element[] }) => {
	return (
		<>
			<nav className="bg-red-400 text-white">Auth Navbar</nav>
			{children}
		</>
	);
};

export default layout;
