<script lang="ts">
    import { newYearMessages } from '$lib/messages';
</script>

<div class="min-h-screen w-full flex items-center justify-center px-4 py-16">
    <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-light mb-12">Inspiring New Year Messages</h1>
        
        <div class="grid grid-cols-1 gap-6">
            {#each newYearMessages as message}
            <div class="bg-white rounded-lg border py-4 px-10 shadow">
                <blockquote class="text-xl md:text-2xl font-light italic mb-4">
                    "{message.message}"
                </blockquote>
                <cite class="text-black/70 font-medium">
                    — {message.author}
                </cite>
            </div>
            {/each}
        </div>
    </div>
</div>
