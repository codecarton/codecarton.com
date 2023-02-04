<svelte:head>
	<title>Code Carton</title>
</svelte:head>
<header>
	<img src="/code-carton-logo.svg" alt="Code Carton Logo" />
	<nav>
		<a href="https://twitter.com/codecarton" rel="norefferr">Twitter</a>
		<a href="mailto:hello@codecarton.com">Email</a>
	</nav>
</header>

<div>
	<img src="/iphone-screenshot.png" alt="Screnshot of Fractions iOS App on an iPhone 14 Pro" />
	<br />
	<img src="/Fractions.svg" alt="The word Fractions" />
	<p style="color: white; font-family: sans-serif;">
		A fractional calculator app designed for woodworkers and other makers.
	</p>
	<a href="https://fractionsapp.com" style="color: #D447F0;">Sign up for beta waiting list</a>
</div>

<style>
	:global(body) {
		background-color: #1f1f1f;
		padding: 20px;
		text-align: center;
		display: block;
		margin: 0 auto;
	}

	a {
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		text-decoration: none;
	}

	a:hover {
		font-weight: 600;
	}

	nav {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	nav a {
		margin: 0 15px;
	}

	div img {
		margin-top: 10px;
	}
</style>
