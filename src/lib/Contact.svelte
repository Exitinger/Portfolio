<script lang="ts">
  import { profile } from './data';
  import { reveal } from './actions';
</script>

<section id="contact" class="py-24 px-6 max-w-2xl mx-auto text-center flex flex-col items-center" use:reveal={{ delay: 200 }}>
  <p class="text-cyan-500 font-mono mb-4 text-sm">04. What's Next?</p>
  <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
  <p class="text-zinc-400 text-lg mb-12 leading-relaxed max-w-xl">
    My inbox is always open.
  </p>
  <a href="mailto:{profile.email}" class="inline-block px-8 py-4 border border-cyan-400/30 text-cyan-400 font-medium rounded hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
    Say Hello
  </a>

  <footer class="mt-32 text-zinc-600 text-xs font-mono">
    <div class="flex flex-col items-center gap-6 mb-8">
         <div class="flex gap-6 text-sm flex-wrap justify-center">
            <a href={profile.github} target="_blank" class="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href={profile.linkedin} target="_blank" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={profile.telegram} target="_blank" class="hover:text-cyan-400 transition-colors">Telegram</a>
            <a href="mailto:{profile.email}" class="hover:text-cyan-400 transition-colors">Email</a>
         </div>
         <a href="https://wakatime.com/@Exitinger" target="_blank" class="opacity-80 hover:opacity-100 transition-opacity">
            <img src="https://wakatime.com/@Exitinger" alt="#Exitinger - Full Stack Developer" />
         </a>
    </div>
    <p>Designed & Built by {profile.name}</p>
  </footer>
</section>
