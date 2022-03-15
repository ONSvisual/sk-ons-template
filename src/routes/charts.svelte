<script context="module">
	const prerender = true;

  import { assets } from "$app/paths";

	export async function load({ fetch }) {
    let response = await fetch(assets + "/data/data.json");
    let data = await response.json();
    
    return {
			props: { data }
		}
	}
</script>

<script>
  import Titleblock from "$lib/layout/Titleblock.svelte";
	import Headline from "$lib/layout/partial/Headline.svelte";
	import Subhead from "$lib/layout/partial/Subhead.svelte";
	import Content from "$lib/layout/Content.svelte";
	import Cards from "$lib/layout/Cards.svelte";
	import Card from "$lib/layout/partial/Card.svelte";
  import ProfileChart from "$lib/chart/ProfileChart.svelte";
  import BarChart from "$lib/chart/BarChart.svelte";
  import Em from "$lib/ui/Em.svelte";

  export let data;
</script>

<svelte:head>
  <title>Charts demo</title>
  <meta property="og:title" content="Charts demo" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Titleblock
  mode="page"
	breadcrumb="{[
    {label: 'Home', url: `${assets}/`},
    {label: 'Charts demo'}
  ]}">
	<Headline>Charts demo</Headline>
	<Subhead>This page offers a demo of how to pre-load JSON data in a "load" function in order to create simple pre-rendered HTML charts.</Subhead>
</Titleblock>

<Content>
	<Cards title="Example charts" subtitle="optional">
		<Card title="Population">
			<div class="num-big">{(100 * data.population[0].value / data.population[1].value).toFixed(1)}%</div>
			<div class="num-suffix">of people in England and Wales</div>
			<div class="num-desc">
        <Em color="lightgrey">{data.population[0].value.toLocaleString()}</Em> 
        of {data.population[1].value.toLocaleString()} people
      </div>
		</Card>
		<Card title="Age profile">
			<ProfileChart data={data.age}/>
		</Card>
		<Card title="Sex">
			<BarChart data={data.sex}/>
		</Card>
	</Cards>
</Content>