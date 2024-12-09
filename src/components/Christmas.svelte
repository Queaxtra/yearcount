<script>
    import { getPastNewYears } from '$lib/christmas';
    let pastNewYears = getPastNewYears(12);
</script>

<div id="pastYear" class="min-h-screen w-full flex items-center justify-center px-4">
    <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-light mb-12">Past New Years</h1>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {#each pastNewYears as newYear}
            <div class="flex flex-col bg-white rounded-lg border py-4 px-10 shadow">
                <div class="text-4xl font-extralight text-black mb-2">
                    {newYear.year}
                </div>
                <div class="text-lg font-light text-black mb-2">
                    {newYear.daysAgo} days ago
                </div>
                <div class="text-sm text-black/30 font-light tracking-widest uppercase">
                    <i class="ri-calendar-line"></i> {newYear.date.toLocaleDateString()}
                </div>
            </div>
            {/each}
        </div>

        <div class="mt-12">
            <a href="/christmas" class="inline-flex items-center gap-2 px-6 py-3 bg-cGray border rounded-lg transition-all duration-300">
                See More Years
                <i class="ri-arrow-right-line"></i>
            </a>
        </div>
    </div>
</div>