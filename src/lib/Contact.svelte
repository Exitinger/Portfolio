<script lang="ts">
  import { profile } from './data';
  import { reveal } from './actions';
</script>

<footer class="mt-32 text-zinc-600 text-xs font-mono">
    <div class="flex flex-col items-center gap-6 mb-8">
         <div class="flex gap-6 text-sm flex-wrap justify-center">
            <a href={profile.github} target="_blank" class="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href={profile.linkedin} target="_blank" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={profile.telegram} target="_blank" class="hover:text-cyan-400 transition-colors">Telegram</a>
            <a href="mailto:{profile.email}" class="hover:text-cyan-400 transition-colors">Email</a>
         </div>

         <a href={profile.github} target="_blank" class="group transition-all duration-300">
            <span class="text-zinc-500 group-hover:text-cyan-400 transition-colors">
              <span class="font-bold text-zinc-400 group-hover:text-cyan-400">#Exitinger</span> - Full Stack Developer
            </span>
         </a>
    </div>
    <p class="opacity-50">Designed & Built by {profile.name}</p>
  </footer>
</section>