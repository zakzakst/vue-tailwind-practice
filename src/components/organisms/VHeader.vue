<template>
  <nav class="bg-white border border-gray-300 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap">LOGO</span>
      </a>
      <div class="relative flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
          @click="state.isShowUserMenu = !state.isShowUserMenu"
        >
          <span class="sr-only">{{ state.isShowUserMenu ? 'ユーザーメニューを閉じる' : 'ユーザーメニューを開く' }}</span>
          <img class="w-8 h-8 rounded-full" :src="state.user.thumb" :alt="`${state.user.name}の写真`">
        </button>
        <div
          class="absolute top-4 right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-300 shadow"
          :class="{'hidden': !state.isShowUserMenu}"
        >
          <div class="py-3 px-4">
            <span class="block text-sm text-gray-900">{{ state.user.name }}</span>
            <span class="block text-sm font-medium text-gray-500 truncate">{{ state.user.mail }}</span>
          </div>
          <ul class="py-1" aria-labelledby="dropdown">
            <li v-for="(item, index) in state.userMenuItems" :key="index">
              <a :href="item.link" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          @click="state.isShowMenu = !state.isShowMenu"
        >
          <span class="sr-only">{{ state.isShowMenu ? 'メニューを閉じる' : 'メニューを開く' }}</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="{'hidden': state.isShowMenu}"
          >
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="{'hidden': !state.isShowMenu}"
          >
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="justify-between items-center w-full md:flex md:w-auto md:order-1" :class="{'hidden': !state.isShowMenu}">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li v-for="(link, index) in state.links" :key="index">
            <a :href="link.link" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VHeader',

  setup() {
    const state = reactive({
      isShowMenu: false,
      links: [
        {
          link: '#',
          label: 'Home',
        },
        {
          link: '#',
          label: 'About',
        },
        {
          link: '#',
          label: 'Services',
        },
        {
          link: '#',
          label: 'Pricing',
        },
        {
          link: '#',
          label: 'Contact',
        },
      ],
      isShowUserMenu: false,
      user: {
        thumb: 'https://picsum.photos/id/1005/200/200',
        name: '山田 太郎',
        mail: 'yamada@mail.com',
      },
      userMenuItems: [
        {
          link: '#',
          label: 'Dashboard',
        },
        {
          link: '#',
          label: 'Settings',
        },
        {
          link: '#',
          label: 'Earnings',
        },
        {
          link: '#',
          label: 'Sign out',
        },
      ],
    });

    return {
      state,
    };
  },
}
</script>