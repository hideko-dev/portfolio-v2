<div class="tc">

    <div class="title">

        <p class="iam">Hello, I am</p>
        <div class="big">
            <p class="hideko">Hideko.</p>
            <p class="short">I build things for the web.</p>
        </div>

        <div class="bio">
            <p>I am a student doing mostly front-end development. I also do occasional software and backend development and develop extensively.</p>
        </div>

    </div>

</div>

<style>
    .tc {
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .title {
        padding: 10rem;
    }
    .bio {
        margin-left: 4px;
        margin-top: 1rem;
        width: 28rem;
        font-family: Inter-Medium;
        line-height: 1.5rem;
        color: rgba(var(--text-thin-rgb), 0.6);
    }
    .iam {
        font-family: Roboto;
        font-family: Inter-Medium;
        color: var(--text-thin);
        margin-left: 3px;
        font-size: 18px;
    }
    .big {
        margin-top: 0.8rem;
        font-family: Inter-ExtraBold;
        font-size: 80px;
        color: var(--text-thin);
    }
    .short {
        color: rgba(var(--text-thin-rgb), 0.7);
    }

    @media (max-width: 772px) {
        .title {
            padding: 5rem;
        }
    }

    @media (max-width: 630px) {
        .title {
            padding: 2rem;
        }
        .bio {
            width: 28rem;
        }
    }

    @media (max-width: 516px) {
        .title {
            padding: 0;
            margin-left: 3rem;
        }
        .bio {
            width: 25rem;
            margin-left: 0px;
        }
    }

    @media (max-width: 460px) {
        .title {
            margin-left: 2rem;
        }
        .bio {
            width: 19rem;
        }
    }

    @media (max-width: 600px) {
        .big {
            font-size: 60px;
        }
        .bio {
            font-size: 14px;
        }
    }

</style>