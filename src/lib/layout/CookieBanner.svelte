<script>
  import { onMount } from "svelte";

  // True if usage cookies are allowed (to be read from parent component)
  export let usageCookies = false;

  let showBanner = false;
  let showConfirm = false;
  let message = "";

  function hasCookiesPreferencesSet() {
    return -1 < document.cookie.indexOf("cookies_preferences_set=true")
  }

  // Check if usage cookies are allowed (for Google Analytics + Hotjar)
  function getUsageCookieValue() {
    var cookiesPolicyCookie = document.cookie.match(
      "(^|;) ?cookies_policy=([^;]*)(;|$)"
    );
    if (cookiesPolicyCookie) {
      var decodedCookie = decodeURIComponent(cookiesPolicyCookie[2]);
      var cookieValue = JSON.parse(decodedCookie);
      return cookieValue.usage;
    }
    return false;
  }

  function extractDomainFromUrl(e) {
    if (0 <= e.indexOf("localhost") || 0 <= e.indexOf("127.0.0.1")) return "localhost";
    var t = new RegExp("(.co.uk|.gov.uk)"),
      t = e.match(t)[0];
    return "." + e.replace(t, "").split(".").pop() + t
  }

  function setCookie(option) {
    let oneYearInSeconds = 60 * 60 * 24 * 365;
    let url = window.location.hostname;
    let cookiesDomain = extractDomainFromUrl(url);
    let cookiesPreference = !0;
    let encodedCookiesPolicy = `%7B%22essential%22%3Atrue%2C%22usage%22%3A${option == 'all' ? 'true' : 'false'}%7D`;
    let cookiesPath = "/";
    
    document.cookie = `cookies_preferences_set=${cookiesPreference};max-age=${oneYearInSeconds};domain=${cookiesDomain};path=${cookiesPath};`;
    document.cookie = `cookies_policy=${encodedCookiesPolicy};max-age=${oneYearInSeconds};domain=${cookiesDomain};path=${cookiesPath};`;

    message = option == "all" ? "all" : "only essential";
    if (option == "all") usageCookies = true;
    showConfirm = true;
  }

  onMount(() => {
    showBanner = !hasCookiesPreferencesSet();
    usageCookies = getUsageCookieValue();
  })
</script>

{#if showBanner}
<section>
  <form
    id="global-cookie-message"
    class="cookies-banner cookies-banner--hidden js-cookies-banner-form clearfix"
    aria-label="cookie banner">
    {#if !showConfirm}
    <div class="cookies-banner__wrapper wrapper js-cookies-banner-inform">
      <div>
        <div class="cookies-banner__message adjust-font-size--18">
          <h1 class="cookies-banner__heading font-size--h3">
            Tell us whether you accept cookies
          </h1>
          <p class="cookies-banner__body">
            We would like to
            <a href="/cookies">use cookies to collect information</a>
            about how you use <strong>ons.gov.uk</strong>.
          </p>
          <p class="cookies-banner__body">
            We use this information to make the website work as well as possible
            and improve our services.
          </p>
        </div>
        <div class="cookies-banner__buttons">
          <div class="cookies-banner__button cookies-banner__button--accept">
            <button
              class="btn btn--full-width btn--primary btn--focus margin-right--2 font-weight-700 font-size--17 text-wrap js-accept-cookies"
              data-gtm-accept-cookies="true" type="submit"
              on:click|preventDefault={() => setCookie('all')}>
              Accept all cookies
            </button>
          </div>
          <div class="cookies-banner__button">
            <button
              class="btn btn--full-width btn--secondary btn--focus margin-right--2 font-weight-700 font-size--17 text-wrap js-accept-cookies"
              data-gtm-accept-cookies="true"
              on:click|preventDefault={() => setCookie('essential')}>
              Essential cookies only
              </button>
          </div>
        </div>
      </div>
    </div>
    {:else}
    <div class="js-cookies-banner-confirmation" tabindex="-1">
      <div class="cookies-banner__wrapper wrapper">
        <div class="col">
          <div class="cookies-banner__message adjust-font-size--18">
            <p class="cookies-banner__confirmation-message">
              You’ve accepted {message} cookies. You can
              <a href="/cookies">change your cookie settings</a>
              at any time.
              <button
                type="button"
                class="cookies-banner__button--hide js-hide-cookies-banner"
                on:click={() => showBanner = false}>
                Hide
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/if}
  </form>
</section>
{/if}