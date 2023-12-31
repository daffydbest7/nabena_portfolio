function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-sm md:text-xl lg:text-xl text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				
					Developed by
				<a
					href="https://davidlawrence.onrender.com"
					target="__blank"
					className=" dark:text-secondary-light font-medium  hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500 text-green-500 "
				>
					David Lawrence
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
