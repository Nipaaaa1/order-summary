<script setup lang="ts"></script>

<template>
  <div
    class="grid h-svh w-full place-items-center bg-primary-pale-blue p-6 font-red-hat-display"
  >
    <img
      class="absolute inset-0"
      src="/images/pattern-background-mobile.svg"
      alt=""
    />
    <div class="z-10 flex w-full flex-col overflow-clip rounded-2xl">
      <img
        src="/images/illustration-hero.svg"
        alt="A person listening music illustration"
      />
      <div class="space-y-4 bg-neutral-very-pale-blue p-6 text-center">
        <h1 class="text-xl font-black text-neutral-dark-blue">Order Summary</h1>
        <p class="text-sm font-semibold text-neutral-desaturated-blue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div
          class="flex items-center gap-4 rounded-xl bg-primary-pale-blue/40 p-4"
        >
          <img src="/images/icon-music.svg" alt="" />
          <div class="flex flex-col">
            <span class="text-sm font-bold text-neutral-dark-blue">
              Annual Plan
            </span>
            <span class="text-sm font-semibold text-neutral-desaturated-blue"
              >$59.99/year</span
            >
          </div>
          <a
            class="ml-auto text-xs font-bold text-primary-bright-blue underline"
            href="#"
            >Change</a
          >
        </div>
        <button
          class="w-full rounded-xl bg-primary-bright-blue p-3 text-sm font-bold text-neutral-very-pale-blue shadow-xl shadow-primary-bright-blue/30"
        >
          Proceed to Payment
        </button>
        <button
          class="w-full p-3 text-sm font-bold text-neutral-desaturated-blue"
        >
          Cancel Order
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
