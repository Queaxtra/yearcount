<script lang="ts">
    import { newYearFacts } from '$lib/history';
</script>

<div class="min-h-screen w-full flex items-center justify-center px-4 py-16">
    <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-light mb-12">History of New Year's Celebrations</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each newYearFacts as fact}
            <div class="bg-white rounded-lg border py-4 px-10 shadow">
                <h3 class="text-xl font-medium mb-2">{fact.title}</h3>
                {#if fact.year}
                <div class="text-lg font-light text-black/70 mb-2">Year: {fact.year}</div>
                {/if}
                <p class="text-black/80 font-light leading-relaxed">
                    {fact.description}
                </p>
            </div>
            {/each}
        </div>
    </div>
</div>
