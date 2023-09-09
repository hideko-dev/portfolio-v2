<script>
    import { themeStatus } from "./theme";
</script>

<svelte:head>

    <style>
        :root {
            --main: #3bff96;
            --main-rgb: 59, 255, 150;
            --main-gradient: #3bff96, #46ffd4;
        }
    </style>

    {#if $themeStatus === "dark"}
        <style>
            :root {
                --bg: rgb(21,27,31);
                --bg-rgb: 21,27,31;

                --text: rgb(255, 255, 255);
                --text-rgb: 255, 255, 255;

                --thin: rgb(16,23,26);
                --border: rgb(40, 40, 40);
                --text-thin: #dadada;
                --text-thin-rgb: 218,218,218
            }
        </style>
    {:else if $themeStatus === "light"}
        <style>
            :root {
                --bg: rgb(255, 255, 255);
                --bg-rgb: 255, 255, 255;

                --text: rgb(16,20,24);
                --text-rgb: 16,20,24;

                --thin: rgb(242,246,248);
                --border: rgb(210, 210, 210);
                --text-thin: #525252;
                --text-thin-rgb: 82,82,82
            }
        </style>
    {/if}

</svelte:head>