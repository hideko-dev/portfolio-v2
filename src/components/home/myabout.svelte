<script>
    import ContextName from "./contextName.svelte";
</script>

<div class="about">
    <div class="content">
        <div class="contextname"><ContextName icon="fa-solid fa-user" title="my about"/></div>
        <p class="for">For more information <wbr><span>about me</span></p>

        <div class="cards">

            <div class="card">
                <i class="fa-solid fa-box"></i>
                <p class="title">Products</p>
                <p class="text">We develop and produce a lot of things. I like to create.</p>
            </div>

            <div class="card">
                <i class="fa-solid fa-droplet"></i>
                <p class="title">Designs</p>
                <p class="text">I am a little bit good at design. Just a little bit, really.</p>
            </div>

            <div class="card">
                <i class="fa-brands fa-react"></i>
                <p class="title">Get bored easily</p>
                <p class="text">I get bored very easily, but I am making a lot of new projects for that statement.</p>
            </div>

        </div>

    </div>
</div>

<style>
    .cards {
        margin: 2rem auto;
        display: grid;
        gap: 1rem .5rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        width: 40rem;
    }
    .card {
        background: var(--bg);
        width: 200px;
        height: 200px;
        border-radius: 10px;
        position: relative;
        margin: 0 auto;
        /*border: 2px solid var(--border);*/
        transition: all 0.3s;
    }
    .card::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(to bottom right, var(--main), var(--border) 40%);
        width: 200px;
        height: 200px;
        border-radius: 10px;
        scale: 1.02;
        z-index: -2;
        transition: all 0.3s;
        opacity: 0;
    }
    .card::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: var(--border);
        width: 200px;
        height: 200px;
        border-radius: 10px;
        scale: 1.02;
        z-index: -1;
        transition: all 0.3s;
    }
    .card:hover {
        border-color: transparent;
        cursor: pointer;
    }
    .card:hover::before {
        opacity: 1;
    }
    .card:hover::after {
        opacity: 0;
    }
    .card i {
        border: 1px solid var(--border);
        border-radius: 10px;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        position: absolute;
        left: 1rem;
        color: var(--main);
        top: 1rem;
        background: rgba(var(--main-rgb), 0.2);
        border-color: var(--main);
        box-shadow: 0px 0px 10px 0px var(--main);
    }
    .card .title {
        font-family: Inter;
        font-size: 20px;
        position: absolute;
        left: 1rem;
        top: 4rem;
    }
    .card .text {
        position: absolute;
        left: 1rem;
        top: 6rem;
        font-size: 12px;
        margin: 0 auto;
        width: 165px;
    }
    .about {
        height: 40vh;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 10rem;
    }
    .about .for {
        font-family: Inter-ExtraBold;
        font-size: 40px;
        margin-top: 1rem;
        margin-left: 4px;
        color: var(--text-thin);
    }
    .about .for span {
        background: linear-gradient(to right, var(--main-gradient));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .contextname {
        margin-left: 3px;
    }
    @media (max-width: 750px) {
        .about {
            height: 75vh;
        }
        .cards {
            width: 30rem;
        }
        .about .for {
            margin-left: 1.12rem;
        }
        .contextname {
            margin-left: 1rem;
        }
    }
    @media (max-width: 550px) {
        .cards {
            width: 20rem;
        }
        .about {
            margin-top: 20rem;
        }
        .about .for {
            margin-left: 0px;
            text-align: center;
        }
        .contextname {
            margin-left: 80px;
        }
    }
    @media (max-width: 400px) {
        .about {
            height: 40vh;
        }
    }
</style>