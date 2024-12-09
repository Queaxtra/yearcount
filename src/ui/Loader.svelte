<script lang="ts">
    import Snow from "./Snow.svelte";

    const icons = ['🎄', '🎅', '🎁', '⛄', '🦌', '🔔', '❄️', '✨'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    const texts = ['Happy New Year!', 'Happy New Year!', 'Happy New Year!', 'Welcome New Year!', 'New Year New Hopes!'];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center">
    <Snow />
    <div class="text-center">
        <div class="animate-bounce mb-4">
            <div class="text-6xl">{randomIcon}</div>
        </div>
        <div class="animate-pulse text-2xl font-light text-black/70">
            {randomText}
        </div>
    </div>
</div>