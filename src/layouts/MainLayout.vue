<template>
  <header
    ref="header"
    class="h-50px flex items-center border-substrate border-b-1 light:bg-maind"
  >
    <nav
      ref="nav"
      class="flex px-10 items-center space-x-3 w-full min-w-min"
    >
      Header
    </nav>
  </header>
  <RouterView />
</template>
