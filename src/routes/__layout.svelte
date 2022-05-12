<script>
  import "../app.css";
  import { base } from "$app/paths";
  import { page } from '$app/stores';
	import { setContext } from "svelte";
	import { themes, analyticsId, analyticsProps } from "$lib/config";
	import Warning from "$lib/ui/Warning.svelte";
	import ONSHeader from "$lib/layout/ONSHeader.svelte";
	import ONSFooter from "$lib/layout/ONSFooter.svelte";
  import AnalyticsBanner from "$lib/layout/AnalyticsBanner.svelte";
	
  // For localisation of menu etc
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";

  // STYLE CONFIG
  // Set theme globally (options are 'light' or 'dark', defined in config.js)
  let theme = "light";
  setContext("theme", themes[theme]);

  // GOOGLE ANALYTICS
  // Settings for page analytics. Values must be shared with <AnalyticsBanner> component
  // 'analyticsId' and 'analyticsProps' are defined in config.js
  let gtag;
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.ico" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{base}/" />
	<meta property="og:image" content="{base}/img/og.png" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<Warning>
  WARNING! This is a prototype.
</Warning>

{#if false}
<AnalyticsBanner {analyticsId} {analyticsProps} {page} bind:gtag/>
{/if}

<ONSHeader {baseurl} {path} {lang}/>

<main id="main" tabindex="-1">
  <slot {gtag}/>
</main>

<ONSFooter {baseurl} {lang}/>