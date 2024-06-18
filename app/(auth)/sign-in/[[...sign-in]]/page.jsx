import { SignIn } from "@clerk/nextjs";
import wall from '../../../../public/assets/wall.jpg'
export default function Page() {
  return (
  

<section class="bg-white dark:bg-gray-900">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="vikash"
        src="/assets/wall.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div class="hidden lg:relative lg:block lg:p-12">
        <a class="block text-white" href="#">
          <span class="sr-only">Home</span>
         
        </a>

        <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to AceInterviews 🤖
        </h2>

        <p class="mt-4 leading-relaxed text-white/90">
        Revolutionizing Job Recruitment with AI-Powered Precisions
        </p>
      </div>
    </section>

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <div class="relative -mt-16 block lg:hidden">
          <a
            class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
            href="#"
          >
            <span class="sr-only">Home</span>
         
          </a>

          <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
          Welcome to AceInterviews 🤖
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
          Revolutionizing Job Recruitment with AI-Powered Precisions
          </p>
        </div>
        <SignIn />;
       
      </div>
    </main>
  </div>
</section>
  ) 
}