<script>
    import { themeStatus, onChangeTheme } from "../../libraries/theme/theme.js";
    import { navList } from "../../libraries/navlist/navlist.js";
    import { links } from "../../libraries/links/links.js";
    import {Link} from "svelte-routing";
    import { toggleTheme } from "../../libraries/theme/theme.js";
    import { menuStatus } from "../../libraries/menu/menu.js";
    import { ripple } from "svelte-ripple-action";
    import { versionMenuStatus } from "../../libraries/versionSwitch/version.js";

    const nav = $navList;
    const link = $links;
    let invert = 0;
    if($themeStatus === "dark") {
        invert = 0;
    } else if($themeStatus === "light") {
        invert = 0.8;
    }
    onChangeTheme((newTheme) => {
        if(newTheme === "dark") {
            invert = 0;
        } else if(newTheme === "light") {
            invert = 0.8;
        }
    })

    let menu_l1_def = "translate(0%,250%) rotate(-45deg)";
    let menu_l2_def = "translate(0%,-220%) rotate(45deg)";
    let menu_l1 = "";
    let menu_l2 = "";
    function handleOpenMenu() {
        if($menuStatus === false) {
            menuStatus.set(true);
            menu_l1 = menu_l1_def;
            menu_l2 = menu_l2_def;
        } else if($menuStatus === true) {
            menuStatus.set(false);
            menu_l1 = "";
            menu_l2 = "";
        }
    }

    function changeVersion() {
        if($versionMenuStatus === true) {
            versionMenuStatus.set(false);
        } else if($versionMenuStatus === false) {
            versionMenuStatus.set(true);
        }
        console.log($versionMenuStatus);
    }

</script>

<div class="header">

    <Link to="/" style="text-decoration: none">
        <div class="logo">
            <img src="logo.webp" alt="logo" style="filter: invert({invert});">
            <p>Hideko</p>
        </div>
    </Link>
    <div class="nav">
        {#each nav as navs}
            <div class="list" use:ripple={{ color: "rgba(var(--bg-rgb), 0.3)" }}>
                <Link to={navs.to} style="text-decoration: none;">
                    <p>{navs.name}</p>
                </Link>
            </div>
        {/each}
    </div>
    <div class="links">
        {#each link as links}
            <a href={links.link}>
                <div class="icon" use:ripple={{ color: "rgba(var(--text-rgb), 0.2)" }}>
                    <i class="{links.icon}"/>
                </div>
            </a>
        {/each}
    </div>
    <div class="themeswitcher" on:click={toggleTheme} use:ripple={{ color: "rgba(var(--text-rgb), 0.2)" }}>
        {#if $themeStatus === "dark"}
            <i class="fa-solid fa-moon"></i>
        {:else if $themeStatus === "light"}
            <i class="fa-solid fa-sun"></i>
        {/if}
    </div>
    <div class="menubar" on:click={handleOpenMenu} use:ripple={{ color: "rgba(var(--text-rgb), 0.2)" }}>
        <div class="l l1" style="transform: {menu_l1}"/>
        <div class="l l2" style="transform: {menu_l2}"/>
    </div>
    <div class="version"  on:click={changeVersion} use:ripple={{ color: "rgba(var(--text-rgb), 0.2)" }}>
        <i class="fa-solid fa-code-compare"></i>
    </div>
</div>

<style>
    .header {
        display:flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--border);
        height: 3.5rem;
        width: 100%;
        position: fixed;
        z-index: 999;
        background: var(--thin-rgb);
        backdrop-filter: blur(15px);
    }
    .logo {
        display:flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s;
        font-family: Inter;
        font-size: 25px;
        color: var(--text);
    }
    .logo:hover {
        opacity: 0.4;
        cursor: pointer;
    }
    .logo img {
        width: 2.45rem;
        margin-right: 8px;
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 5rem;

    }
    .nav .list {
        border-radius: 100px;
    }
    .nav .list p {
        color: var(--text);
        opacity: 0.9;
        font-family: Roboto;
        letter-spacing: 0.8px;
        margin-inline: 2px;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        padding-inline: 10px;
        border-radius: 100px;
        font-size: 15px;
        transition: all 0.2s;
    }
    .nav .list p:hover {
        background: rgba(var(--text-rgb), 0.95);
        color: var(--bg);
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 10rem;

    }
    .links a {
        text-decoration: none;
        color: var(--text-thin);
    }
    .links .icon {
        background: var(--bg);
        border: 1px solid var(--border);
        margin-inline: 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    .links .icon:hover {
        background: var(--thin);
        border-color: var(--main);
        box-shadow: 0px 0px 30px 0px var(--main);
        cursor: pointer;
    }

    .themeswitcher {
        background: var(--bg);
        border: 1px solid var(--border);
        margin-inline: 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;

        margin-left: 4rem;
    }
    .themeswitcher:hover {
        background: var(--thin);
        border-color: cornflowerblue;
        box-shadow: 0px 0px 30px 0px cornflowerblue;
        cursor: pointer;
    }
    .menubar {
        background: var(--bg);
        border: 1px solid var(--border);
        margin-inline: 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: none;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        position: relative;
    }
    .menubar:hover {
        background: var(--thin);
        border-color: cornflowerblue;
        box-shadow: 0px 0px 30px 0px cornflowerblue;
        cursor: pointer;
    }
    .menubar .l {
        width: 16px;
        height: 1px;
        border-radius: 10px;
        background: var(--text);
        transition: all 0.1s;
    }
    .menubar .l1 {
        position: absolute;
        top: 11px;
    }

    .menubar .l2 {
        position: absolute;
        top: 16px;
    }

    .version {
        background: var(--bg);
        border: 1px solid var(--border);
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        font-size: 15px;
    }
    .version:hover {
        background: var(--thin);
        border-color: cornflowerblue;
        box-shadow: 0px 0px 30px 0px cornflowerblue;
        cursor: pointer;
    }

    @media (max-width: 950px) {
        .nav {
            margin-left: 3rem;
        }
        .links {
            margin-left: 4rem;
        }
        .themeswitcher {
            margin-left: 3rem;
        }
    }

    @media (max-width: 785px) {
        .nav {
            margin-left: 2rem;
        }
        .links {
            margin-left: 1rem;
        }
        .themeswitcher {
            margin-left: 2rem;
        }
    }

    @media (max-width: 700px) {
        .nav {
            display:none;
        }
        .links {
            margin-left: 10rem;
        }
        .themeswitcher {
            margin-left: 10px;
        }
        .menubar {
            display:flex;
        }
    }

    @media (max-width: 600px) {
        .links {
            margin-left: 5rem;
        }
    }

    @media (max-width: 500px) {
        .links {
            margin-left: 2rem;
        }
    }

    @media (max-width: 450px) {
        .links {
            display:none;
        }
        .themeswitcher {
            margin-left: 8rem;
        }
    }

    @media (max-width: 400px) {
        .themeswitcher {
            margin-left: 4rem;
        }
    }

</style>