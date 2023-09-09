<script>
    import { menuStatus } from "./menu.js";
    import { navList } from "../navlist/navlist.js";
    import {Link} from "svelte-routing";
    import { ripple } from "svelte-ripple-action";
    const list = $navList;

    let top = -20;
    function onMenuOpened() {
        if($menuStatus) {
            top = 0;
        } else if(!$menuStatus) {
            top = -20;
        }
    }
    $: {
        if ($menuStatus === true || $menuStatus === false) {
            onMenuOpened();
        }
    }
</script>

<div class="menu" style="transform: translateY({top}rem);">
    <div class="container">

        <div class="lists">
            {#each list as lists}
                <Link to={lists.to} style="text-decoration: none;">
                    <p use:ripple={{ color: "rgba(var(--text-rgb), 0.4)" }}>{lists.name}</p>
                </Link>
            {/each}
        </div>

    </div>
</div>

<style>
    .menu {
        background: var(--thin);
        width: 100%;
        height: 15rem;
        border-bottom: 1px solid var(--border);
        position: fixed;
        z-index: 100;
        transition: all 0.5s ease;
    }
    .container {
        background: transparent;
        margin: 3.5rem auto;
        height: 11.4rem;
    }
    .lists {
        width: 120px;
        margin: 5.3rem 4.5rem;
        font-family: Inter;
        font-size: 20px;
    }
    .lists p {
        margin-block: 10px;
        color: var(--text);
        border-radius: 5px;
        padding: 5px;
        padding-left: 10px;
        transition: all 0.2s;
    }
    .lists p:hover {
        background: rgba(var(--text-rgb), 0.1);
    }

    @media (min-width: 701px) {
        .menu {
            display: none;
        }
    }
</style>