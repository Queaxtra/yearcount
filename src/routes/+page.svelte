<script>
    import { onMount } from "svelte";
    import Loader from "../ui/Loader.svelte";
    import Banner from "../components/Banner.svelte";
    import Wishes from "../components/Wishes.svelte";
    import Christmas from "../components/Christmas.svelte";
    import History from "../components/History.svelte";
    import Messages from "../components/Messages.svelte";
    import Footer from "../components/Footer.svelte";

    let isLoading = true;

    onMount(() => {
        setTimeout(() => {
            isLoading = false;
        }, 2000);
    });
</script>

{#if isLoading}
<Loader />
{:else}
<Banner />
<Christmas />
<History />
<Messages />
<Wishes />
<Footer />
{/if}