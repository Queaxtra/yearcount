<script>
    import { getPastNewYears } from '$lib/christmas';
    import Snow from '../../ui/Snow.svelte';
    import Footer from '../../components/Footer.svelte';

    let allNewYears = getPastNewYears();
</script>

<div class="min-h-screen w-full py-20 px-4">
    <Snow />
    <div class="max-w-6xl mx-auto">
        <div class="mb-12 flex items-center justify-between">
            <h1 class="text-3xl md:text-4xl font-light">All New Year's Days Since 1900</h1>
            <a href="/" class="text-black/50 hover:text-black transition-all duration-300">
                <i class="ri-arrow-left-line"></i> Back to Home
            </a>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {#each allNewYears as newYear}
            <div class="flex flex-col bg-white rounded-lg border py-4 px-6 shadow">
                <div class="text-3xl font-extralight text-black mb-2">
                    {newYear.year}
                </div>
                <div class="text-sm font-light text-black mb-2">
                    {newYear.daysAgo} days ago
                </div>
                <div class="text-xs text-black/30 font-light tracking-widest uppercase">
                    <i class="ri-calendar-line"></i> {newYear.date.toLocaleDateString()}
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>

<Footer />