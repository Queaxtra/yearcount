<script lang="ts">
    import { fade } from 'svelte/transition';
    
    let wish = '';
    let showResponse = false;
    let responseMessage = '';
    let isSubmitting = false;
    
    const funnyResponses = [
        "🎅 Your wish has been sent to Santa! (Hope it doesn't end up in spam)",
        "✨ Your wish is sent to the depths of universe... Hope it doesn't get lost",
        "🧝‍♂️ The elves got your wish! But they're on break, you'll have to wait",
        "🎄 Your wish is hung on the Christmas tree! Hope the wind doesn't take it",
        "🦌 Rudolf got your wish! If his nose glows red, he's on the way",
        "🌟 Your wish is written in the stars! Might be hard to read on cloudy days",
        "🎁 Your wish is gift-wrapped! Hope it doesn't get lost in delivery",
        "🔔 The bells are ringing for your wish! But those with headphones might not hear",
        "❄️ Your wish became a snowflake! Let's see if it melts before touching ground",
        "🎪 Your wish was sent to the circus! The clowns are rehearsing now",
        "🍪 Your wish is written on a cookie! Hope Santa reads it before eating",
        "🎭 Your wish is being performed on stage! Tickets are almost sold out",
        "🌈 Your wish is sliding down the rainbow! Hope there's a pot of gold at the end",
        "🎪 Your wish is in the circus show! The acrobats are practicing now",
        "🎨 Your wish is painted on canvas! Don't let anyone touch before the ink dries"
    ];

    function handleSubmit() {
        if (!wish.trim() || isSubmitting) return;
        
        isSubmitting = true;
        responseMessage = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
        showResponse = true;
        wish = '';
        
        setTimeout(() => {
            showResponse = false;
            isSubmitting = false;
        }, 3000);
    }
</script>

<div class="max-w-xl mx-auto px-4 sm:px-0">
    <div class="relative">
        <form on:submit|preventDefault={handleSubmit}>
            <input type="text" 
                bind:value={wish} 
                placeholder="Write your New Year's wish..." 
                class="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border focus:outline-none pr-16 sm:pr-20" 
                disabled={isSubmitting} 
            />
        </form>
    </div>
    
    {#if showResponse}
    <div transition:fade class="mt-4 text-center bg-white rounded-lg shadow border p-3 sm:p-4 text-xs sm:text-sm">
        {responseMessage}
    </div>
    {/if}
</div>