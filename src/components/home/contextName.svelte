<script>
    export let icon = "fa-solid fa-house";
    export let title = "Home";
</script>

<div class="cn">
    <i class="{icon}"></i>
    <p>{title}</p>
</div>

<style>
    .cn {
        background: var(--bg);
        border: 1px solid var(--border);
        display:flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 30px;
        border-radius: 100px;
        font-family: Inter-Medium;
        font-size: 15px;
        transition: all 0.2s;
    }
    .cn:hover {
        border-color: var(--text-thin);
    }
    .cn i {
        margin-right: 7px;
        font-size: 15px;
    }
</style>