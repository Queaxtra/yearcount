<script>
    import Input from '../ui/Input.svelte';
    import Snow from '../ui/Snow.svelte';
    let year = new Date().getFullYear();
</script>

<div class="w-full flex items-center justify-center px-4 relative">
    <Snow />
    <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-light mb-6">Make a New Year's Wish</h1>
        <p class="text-black/50 mb-8 font-light">Write your wish for {year} and let the holiday magic happen</p>
        <Input />
    </div>
</div>