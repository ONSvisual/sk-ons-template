<script context="module">
	const prerender = true;
</script>

<script>
  import { base } from "$app/paths";

	import Titleblock from "$lib/layout/Titleblock.svelte";
	import Headline from "$lib/layout/partial/Headline.svelte";
	import Subhead from "$lib/layout/partial/Subhead.svelte";
	import Section from "$lib/layout/Section.svelte";
	import Article from "$lib/layout/Article.svelte";
	import Figure from "$lib/layout/partial/Figure.svelte";
	import Linkbox from "$lib/layout/Linkbox.svelte";
	import ButtonLink from "$lib/ui/ButtonLink.svelte";
</script>

<svelte:head>
  <title>Page title</title>
  <meta property="og:title" content="Page title" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Titleblock
	breadcrumb="{[
    {label: 'Home', url: `${base}/`},
    {label: 'Article page'}
  ]}"
  date="DD Month YYYY"
  updated="DD Month YYYY (optional)">
	<Headline>Article title</Headline>
	<Subhead>This is an article subtitle.</Subhead>
</Titleblock>

<Article>
	<Section backlink hr>
    <h2>Plain text section</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis ut turpis sodales consectetur. Nunc ut odio eget quam sollicitudin faucibus id eget sapien. Cras id justo venenatis, elementum ex ac, feugiat lacus. Vivamus semper dui in congue sodales. Suspendisse eu arcu eget metus volutpat tempor. Maecenas mattis augue tellus, non consequat ipsum eleifend non. Mauris ac velit nec turpis hendrerit tincidunt in eget mauris. 
    </p>
  </Section>
  <Section backlink hr>
    <h2>Section with embed</h2>
    <p>This is a paragraph of text.</p>
    <Figure
      embed="<iframe></iframe>"
      download="/"
      background="#eaeaea"
      height={300}>
      Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)
    </Figure>
    <p>This is another paragraph of text.</p>
  </Section>
  <Section backlink>
    <h2>Section with extra wide embed</h2>
    <p>This is a paragraph of text.</p>
    <Figure
      embed="<iframe></iframe>"
      download="/"
      background="#eaeaea"
      height={300}
      fullwidth={true}>
      Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)
    </Figure>
    <p>This is another paragraph of text.</p>
  </Section>

  <ButtonLink url="{base}/">
    View all data used in this article
  </ButtonLink>
  <Linkbox
    title="Related"
    links="{[
      {label: 'Article one title', url: `${base}/`, type: 'Article', meta: '31 January 2022', description: 'This is a description of the article.'},
      {label: 'Article two title', url: `${base}/`, type: 'Article', meta: '16 January 2022', description: 'This is a description of the article.'}
    ]}"/>
</Article>