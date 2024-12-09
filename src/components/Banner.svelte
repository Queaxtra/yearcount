<script lang="ts">
    import { onMount } from 'svelte';
    import { endYear, type TimeUntilYearEnd } from '$lib/count';
    import Snow from '../ui/Snow.svelte';
    
    let timeLeft: TimeUntilYearEnd = endYear();
    
    onMount(() => {
        const interval = setInterval(() => {
            timeLeft = endYear();
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="min-h-screen w-full flex flex-col items-center justify-center px-4">
    <Snow />
    <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-light mb-12">Time Until Year End</h1>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex flex-col">
                <div class="text-5xl md:text-7xl font-extralight text-black mb-2">{timeLeft.days}</div>
                <div class="text-sm text-black/30 font-light tracking-widest uppercase">Days</div>
            </div>
            
            <div class="flex flex-col">
                <div class="text-5xl md:text-7xl font-extralight text-black mb-2">{timeLeft.hours}</div>
                <div class="text-sm text-black/30 font-light tracking-widest uppercase">Hours</div>
            </div>
            
            <div class="flex flex-col">
                <div class="text-5xl md:text-7xl font-extralight text-black mb-2">{timeLeft.minutes}</div>
                <div class="text-sm text-black/30 font-light tracking-widest uppercase">Minutes</div>
            </div>
            
            <div class="flex flex-col">
                <div class="text-5xl md:text-7xl font-extralight text-black mb-2">{timeLeft.seconds}</div>
                <div class="text-sm text-black/30 font-light tracking-widest uppercase">Seconds</div>
            </div>
        </div>
    </div>
    
    <div class="mt-12">
        <a href="#pastYear" class="text-black/50 hover:text-black transition-all duration-300">
            Past New Year's Days <i class="ri-arrow-down-line"></i>
        </a>
    </div>
</div>