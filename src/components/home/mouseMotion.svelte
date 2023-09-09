<div class="scroll-btn">
    <svg style="overflow: visible;">
        <rect x="1" y="1" width="30" height="48" rx="19" ry="15" stroke="#fff" fill="none"
              style="stroke-width: 2; stroke-linecap: round; opacity: 0.3;">
        </rect>
        <rect class="animated" x="1" y="1" width="30" height="48" rx="19" ry="15" stroke="#ffffff" fill="none"
              style="stroke-width: 2; stroke-linecap: round; opacity: 0.8; visibility: visible; stroke-dashoffset: 0; stroke-dasharray: 0px, 0px;">
        </rect>
        <circle class="ball" cx="16" cy="16.638031364511352" r="2.8000000000000003" fill="#ffffff" stroke="none"
        ></circle>
    </svg>
</div>

<style>
    .scroll-btn {
        position: absolute;
        left: 49%;
        top: 85%;
        width: 32px;
        margin: 0 auto;
        animation: scroll-btn 1s ease-in-out alternate infinite;
        transition: all 0.2s;
    }
    .scroll-btn svg {
        fill: white;
        height: 50px;
        width: 32px;
        margin-bottom: 10px;
    }
    .scroll-btn svg rect {
        stroke: var(--text);
    }
    .scroll-btn svg circle {
        fill: var(--text);
    }
    .scroll-btn svg .animated {
        animation: scroll-down 2s ease-in-out infinite;
    }
    .scroll-btn svg .ball {
        animation: ball-move 1s infinite ease-in-out alternate;
    }
    @keyframes scroll-down {
        0% {
            stroke-dasharray: 0, 180px;
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        60% {
            opacity: 0.8;
            stroke-dasharray: 215.7737px, 363.607px;
        }
        70% {
            opacity: 0;
        }
        80% {
            opacity: 0;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes ball-move {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(16px);
            opacity: 0;
        }
    }

    @media (max-width: 800px) {
        .scroll-btn {
            left: 45%;
        }
    }

</style>