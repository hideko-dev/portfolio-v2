<script>
    import { versionMenuStatus } from "./version.js";
    let pos = -100;
    $: {
        if($versionMenuStatus) {
            pos = 0;
        } else {
            pos = -100;
        }
    }
</script>

<div class="version" style="left: {pos}%;">
    <div class="titlecontent">
        <p class="title">Looking for a different site? Go back in time...</p>
        <a href="https://v1.hideko.cf">
            <div class="v1">
                <img src="version_v1.png" alt="v1">
            </div>
        </a>
    </div>
</div>

<style>

    .version {
        position: fixed;
        background:var(--thin);
        border-right: 2px solid var(--border);
        width: 16rem;
        height: 100vh;
        display: flex;
        justify-content: center;
        transition: all 0.3s;
    }
    .title {
        color:var(--text);
        font-family: Inter-ExtraBold;
        font-size: 20px;
        width: 200px;
        text-align: center;
        margin: 0 auto;
        margin-top: 6rem;
    }
    .v1 {
        margin-block: 5px;
        width: 280px;
        height: 160px;
        scale: 0.7;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.3s;
        position: relative;
    }
    .v1::before {
        content: "v1";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: white;
        font-family: Inter-ExtraBold;
        font-size: 40px;
        display: grid;
        place-items: center;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
    }
    .v1 img {
        width: 18rem;
        object-fit: cover;
        vertical-align: bottom;
        transition: all 0.3s;
    }
    .v1:hover::before {
        cursor: pointer;
        opacity: 1;
    }
    .v1:hover img {
        scale: 1.2;
        filter: grayscale(1) brightness(0.4);
    }
</style>