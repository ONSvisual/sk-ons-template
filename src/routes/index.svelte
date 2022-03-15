<script context="module">
	const prerender = true;
</script>

<script>
  import { assets } from "$app/paths";

	import Content from "$lib/layout/Content.svelte";
	import Navbox from "$lib/layout/partial/Navbox.svelte";
	import Banner from "$lib/layout/Banner.svelte";
	import Cards from "$lib/layout/Cards.svelte";
	import Card from "$lib/layout/partial/Card.svelte";
	import CardFeature from "$lib/layout/partial/CardFeature.svelte";
</script>

<svelte:head>
  <title>Page title</title>
  <meta property="og:title" content="Page title" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Banner title="This is a banner" label="This is a link on a banner" url="/"/>

<Content>
	<Navbox
		title="List of links (click to view templates)"
		links={[
			{label: "Home"},
			{label: "Section page", url: `${assets}/section`},
			{label: "Article page", url: `${assets}/article`},
			{label: "Area report page", url: `${assets}/areareport`},
			{label: "Charts demo", url: `${assets}/charts`}
		]}/>

	<Cards title="Grid of text cards" subtitle="optional">
		<span slot="meta">- Slot for optional subtitle/link</span>
		<Card title="Topic one">
			<div class="num-big">100</div>
			<div class="num-suffix">number suffix</div>
			<div class="num-desc">footnote</div>
		</Card>
		<Card title="Topic two">
			<div class="num-big">89</div>
			<div class="num-suffix">number suffix</div>
			<div class="num-desc">footnote</div>
		</Card>
		<Card title="Topic three">
			<div class="num-big">42</div>
			<div class="num-suffix">number suffix</div>
			<div class="num-desc">footnote</div>
		</Card>
		<Card title="Topic four" colspan={2}>
			<div class="num-big">1,000,000</div>
			<div class="num-suffix">number suffix</div>
			<div class="num-desc">this card spans two columns</div>
		</Card>
		<Card title="Topic five">
			<div class="num-big">20%</div>
			<div class="num-suffix">number suffix</div>
			<div class="num-desc">footnote</div>
		</Card>
	</Cards>

	<Cards title="Featured link cards" subtitle="optional" colwidth="narrow">
		<CardFeature
			title="Local statistics"
			url="/"
			description="Where to find statistics covering specific areas"
			image="https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png"/>
		<CardFeature
			title="Secure Research Service"
			url="/"
			description="Find out how ONS secure data could help your research project"
			image="https://static.ons.gov.uk/images/9eb49f05-66d0-4ab9-9fcb-e5a4e523460f/original/data-strategy.png"/>
		<CardFeature
			title="COVID-19 Infection Survey"
			url="/"
			description="Find out more if you have been contacted to take part"
			image="https://static.ons.gov.uk/images/b72dc597-81e0-47c3-a331-2759a207524b/original/covid-infection-survey@2x.png"/>
		<CardFeature
			title="Other government statistics"
			url="/"
			description="Official Statistics available from across government"
			image="https://static.ons.gov.uk/images/8c1ab5f0-f830-408b-bb18-0c025054e8c8/original/other-govt-statistics.png"/>
	</Cards>
</Content>
