<script lang="ts">
    const socialLinks = {
        github: "https://github.com/Queaxtra",
        twitter: "https://x.com/Queaxtra"
    };
</script>

<footer class="w-full p-8 mt-16">
    <div class="max-w-4xl mx-auto flex justify-between items-center text-xs opacity-50">
        <p>Made with <i class="ri-heart-fill"></i> by Queaxtra</p>
        
        <div class="flex gap-6">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" class="text-black/70 hover:text-black transition-colors" aria-label="GitHub">
                <i class="ri-github-fill text-lg"></i>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" class="text-black/70 hover:text-black transition-colors" aria-label="Twitter">
                <i class="ri-twitter-x-fill text-lg"></i>
            </a>
        </div>
    </div>
</footer>