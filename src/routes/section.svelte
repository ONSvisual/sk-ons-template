<script context="module">
	const prerender = true;
</script>

<script>
  import { assets } from "$app/paths";

	import Titleblock from "$lib/layout/Titleblock.svelte";
	import Headline from "$lib/layout/partial/Headline.svelte";
	import Subhead from "$lib/layout/partial/Subhead.svelte";
	import Content from "$lib/layout/Content.svelte";
	import Cards from "$lib/layout/Cards.svelte";
	import CardSection from "$lib/layout/partial/CardSection.svelte";
</script>

<svelte:head>
  <title>Section title</title>
  <meta property="og:title" content="Section title" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Titleblock
  mode="page"
	breadcrumb="{[
    {label: 'Home', url: `${assets}/`},
    {label: 'Section page'}
  ]}">
	<Headline>Section title</Headline>
	<Subhead>This is a description of this section.</Subhead>
</Titleblock>

<Content>
	<Cards title="In this section">
		<CardSection
			title="Section one"
			url="/"
			description="A short description of this section"/>
		<CardSection
			title="Section two"
			url="/"
			description="A short description of this section"/>
		<CardSection
			title="Section three"
			url="/"
			description="A short description of this section"
			image="https://www.ons.gov.uk/img/t1-local.png"/>
	</Cards>
</Content>