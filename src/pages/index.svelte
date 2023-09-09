<script>
    import Head from "../libraries/head.svelte";
    import Theme from "../libraries/theme/theme.svelte";
    import { Router, Route } from "svelte-routing";
    import Header from "../components/header/header.svelte";
    import Home from "../components/home/home.svelte";
    import NotFound from "../components/notfound/notfound.svelte";
    import Menu from "../libraries/menu/menu.svelte";
    import Version from "../libraries/versionSwitch/version.svelte";
    import Projects from "../components/projects/projects.svelte";
</script>

<div class="index">
    <Head/>
    <Theme/>
    <Router>
        <Version/>
        <Header/>
        <Menu/>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="*" component={NotFound}/>
    </Router>
</div>

<style>
    .index {
        height: 100vh;
        transition: all 0.2s;
    }
    :root {
        background: var(--bg);
        color: var(--text);
    }
</style>
