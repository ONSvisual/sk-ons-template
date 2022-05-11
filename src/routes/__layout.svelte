<script>
  import "../app.css";
  import { base } from "$app/paths";
  import { page } from '$app/stores';
	import { setContext } from "svelte";
	import { themes, analyticsId, analyticsProps } from "$lib/config";
	import Warning from "$lib/ui/Warning.svelte";
	import ONSHeader from "$lib/layout/ONSHeader.svelte";
	import ONSFooter from "$lib/layout/ONSFooter.svelte";
  import CookieBanner from "$lib/layout/CookieBanner.svelte";
	
  // For localisation of menu etc
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";

  // STYLE CONFIG
  // Set theme globally (options are 'light' or 'dark', defined in config.js)
  let theme = "light";
  setContext("theme", themes[theme]);

  // GOOGLE ANALYTICS
  // Settings for page analytics. usageCookies needs to be bound to the <CookieBanner> component
  // You need to define product-specific analyticsProps in config.js
  const live = $page.url.hostname == "www.ons.gov.uk" || $page.url.hostname == "cy.ons.gov.uk";
  let usageCookies;

  function initAnalytics() {
    window.dataLayer = [{
      "analyticsOptOut": false,
      "gtm.whitelist": ["google","hjtc","lcl"],
      "gtm.blacklist": ["customScripts","sp","adm","awct","k","d","j"],
      ...analyticsProps
    }];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", analyticsId);
  };

  // This code should only be included in multi-page apps. It sends an analytics event when the URL changes
  $: if (typeof gtag !== 'undefined') {
    if ($page.url.searchParams.toString().length > 0) {
      gtag('config', analyticsId, {
        page_path : $page.url.pathname,
        page_location: `${$page.url.hostname}${$page.url.pathname}?${$page.url.searchParams}`,
      });
    } else {
      gtag('config', analyticsId, {
        page_path : $page.url.pathname,
        page_location: `${$page.url.hostname}${$page.url.pathname}`,
      });
    }
  }
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.ico" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{base}/" />
	<meta property="og:image" content="{base}/img/og.png" />
	<meta property="og:image:type" content="image/png" />
  {#if usageCookies && live}
  <script async src="https://www.googletagmanager.com/gtag/js?id={analyticsId}" on:load={initAnalytics}></script>
  {/if}
</svelte:head>

<Warning>
  WARNING! This is a prototype.
</Warning>

<CookieBanner bind:usageCookies/>

<ONSHeader {baseurl} {path} {lang}/>

<main id="main" tabindex="-1">
  <slot/>
</main>

<ONSFooter {baseurl} {lang}/>