<script>
    import ContextName from "./contextName.svelte";
</script>

<div class="exp">

    <div class="content">
        <div class="contextname"><ContextName icon="fa-solid fa-fire" title="experience"/></div>
        <p class="for">Education & <wbr><span>Experience</span></p>

        <div class="container">
            <div class="side"/>
            <div class="dot d1"/>
            <div class="dot d2"/>
            <div class="dot d3"/>

            <div class="tables">

                <div class="box">
                    <p class="year">2023 - Present</p>
                    <div class="exps">
                        <div class="list">
                            <p class="main">Getting Started in Web Development</p>
                            <p class="sub">I didn't know framework for web development.</p>
                        </div>
                        <div class="list">
                            <p class="main">Overcome Java and C#.</p>
                            <p class="sub">It was difficult, but fun.</p>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <p class="year">2020 - 2022</p>
                    <div class="exps">
                        <div class="list">
                            <p class="main">I fell in love with Minecraft.</p>
                            <p class="sub">I'm interested in Java because of this.</p>
                        </div>
                        <div class="list">
                            <p class="main">Getting Started with Programming</p>
                            <p class="sub">First time was a setback for JS.</p>
                        </div>
                        <div class="list">
                            <p class="main">I fell in love with electronics.</p>
                            <p class="sub">It made the room dirty.</p>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <p class="year">2010 - 2020</p>
                    <div class="exps">
                        <div class="list">
                            <p class="main">Being bullied about being gay.</p>
                            <p class="sub">Unforgettable.</p>
                        </div>
                        <div class="list">
                            <p class="main">Born in Miyazaki, Japan.</p>
                            <p class="sub">Happy Birthday.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

<style>
    .container {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.5rem;
        position: relative;
    }
    .side {
        width: 3px;
        height:37.2rem;
        background:var(--border);
        border-radius: 100px;
        margin-top: 36px;
        margin-right: 10px;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 100px;
        background: var(--text-thin);
        position: absolute;
        left: -2px;
    }
    .d1 {
        top: 2.9rem;
        background: var(--main);
    }
    .d2 {
        top: 15.7rem;
    }
    .d3 {
        top: 32.1rem;
    }
    .box {
        width: 29.5rem;
        padding: 1.3rem;
        border-radius: 10px;
        margin-top: 1.2rem;
    }
    .list .sub {
        color: var(--text-thin);
        font-size: 12px;
        margin-top: 2px;
    }
    .year {
        color: var(--text-thin);
        margin-bottom: 1.3rem;
        font-size: 14px;
        width: 150px;
        height: 25px;
        border-radius: 7px;
    }
    .exps {
        font-family: Inter-Medium;
        font-size: 20px;
    }
    .exps .list {
        margin-top: 15px;
    }
    .exp {
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 10rem;
    }
    .exp .for {
        font-family: Inter-ExtraBold;
        font-size: 40px;
        margin-top: 1rem;
        margin-left: 4px;
        color: var(--text-thin);
    }
    .exp .for span {
        background: linear-gradient(to right, var(--main-gradient));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .contextname {
        margin-left: 3px;
    }
    @media (max-width: 550px) {
        .exp {
            height: 130vh;
        }
        .contextname {
            margin-left: 5.9rem;
        }
        .exp .for {
            width: 250px;
            margin-left: 3.5rem;
        }
        .box {
            width: 20rem;
        }
        .side {
            height: 43rem;
            margin-top: 8px;
        }
        .dot {
            left: -3px;
        }

        .d1 {
            top: 2.9rem;
        }
        .d2 {
            top: 18rem;
        }
        .d3 {
            top: 34.8rem;
        }
    }
    @media (max-width: 400px) {
        .exp {
            height: 190vh;
        }
        .dot {
            left: -3px;
        }
    }
</style>