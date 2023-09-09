<script>
    import { Link } from "svelte-routing";
    import { ripple } from "svelte-ripple-action";
</script>

<svelte:head>
    <title>Not Found - Hideko's HomePage</title>
</svelte:head>

<div class="notfound">
    <div class="container">
        <p class="text">404 Not Found</p>
        <Link to="/" style="text-decoration: none">
            <div class="gohome" use:ripple={{ color: "rgba(var(--bg-rgb), 0.3)" }}>
                <i class="fa-solid fa-house"></i>
                <p>Go Home</p>
            </div>
        </Link>
    </div>
</div>

<style>
    .notfound {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 26rem;
    }
    .text {
        font-family: Inter;
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .gohome {
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background:var(--text-thin);
        color: var(--bg);
        width: 200px;
        height: 30px;
        border-radius: 100px;
        font-family: Inter;
        transition: all 0.3s;
    }
    .gohome i {
        margin-right: 5px;
    }
    .gohome:hover {
        scale: 0.95;
        cursor: pointer;
    }
    @media (max-width: 500px) {
        .container {
            width: 20rem;
        }
    }
</style>