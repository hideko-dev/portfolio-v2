<script>
    let id;
    function sendReq() {
        fetch(`http://localhost:3000/?id=${id}&count=1`);
    }
</script>

<div class="input">
    <input type="text" bind:value={id} placeholder=" ">
    <span>Email</span>
</div>

<button on:click={sendReq}>Send</button>

<style>
    .input {
        background:red;
        position: relative;
        width: 12rem;
        height: 2.9rem;
    }
    .input {
        background: transparent;
        width: 12rem;
        height: 2.9rem;
    }
    span {
        position: absolute;
        inset: 0 0 0 1rem;
        color:red;
    }
</style>