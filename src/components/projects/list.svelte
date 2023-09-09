<script>
    import { loadProjects } from "../../libraries/supabase/loadProjects.js";
    let projects = [];
    let containerOpacity = 0;
    const getProjects = async () => {
        containerOpacity = 0;
        projects = await loadProjects();
        setTimeout(() => {
            containerOpacity = 1;
        }, 100)
    }
    getProjects();
    console.log(projects);
</script>

<div class="list">
    {#each projects as p}
        <div class="container" style="opacity: {containerOpacity};">
            <div class="card" style="background: {p.card};"/>
            <p>{p.title}</p>
        </div>
    {/each}
</div>

<style>
    .list {
        display: grid;
        gap: 1rem .5rem;
        grid-template-columns: 250px 250px 250px 250px;
        width: 44rem;
    }
    .container {
        width: 12rem;
        height: 15rem;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 10px;
        transition: all 0.3s;
    }
</style>