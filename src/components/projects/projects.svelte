<script>
    import List from "./list.svelte";
</script>

<div class="projects">
    <div class="lists">
        <List/>
    </div>
</div>

<style>
    .projects {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lists {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
</style>