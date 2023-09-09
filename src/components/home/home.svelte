<script>
    import MouseMotion from "./mouseMotion.svelte";
    import Btn from "./btn.svelte";
    import TopContent from "./topcontent.svelte"
    import MyAbout from "./myabout.svelte";
    import Experience from "./experience.svelte";
</script>

<svelte:head>
    <title>Home - Hideko's HomePage</title>
</svelte:head>

<div class="home">
    <TopContent/>
    <MouseMotion/>
    <MyAbout/>
    <Experience/>
    <Btn/>
</div>

<style>
    .home {
        height: 100vh;
    }



</style>
