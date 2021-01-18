<template>
  <div class="">
    <h2 class="text-4xl">Demo!</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="orders-list
        bg-gray-100
        shadow-md rounded-md border-gray-300 border
      ">
        <div class="flex p-4 border-0 border-b-2 items-center sticky top-0 bg-gray-200">
          <h3 class="flex-grow text-xl font-bold">Recent Orders</h3>
          <div class="flex-shrink text-right text-sm">
            <a href="#" class="no-underline">View all Recent Orders</a>
          </div>
        </div>
        <ul>
          <li v-for="(order, index) in orders"
            :key="index"
            class="flex items-center p-2 px-4 border-b border-gray-400 last:border-b-0"
          >
            <span class="flex-grow">
              <div>{{ order.number }}</div>
              <div>{{ order.date }} | {{ order.price }}</div>
            </span>
            <span class="flex-shrink text-right">{{ order.status }}</span>
          </li>
        </ul>
      </div>

      <div class="
      bg-gray-100
        shadow-md rounded-md border-gray-300 border
        px-4 py-8
        relative
      ">
        <h3 class="text-2xl font-bold">Bar Supplies</h3>
        <div class="text-lg font-semibold">
          Keep thirsty customers satisfied by maintaining a fully stocked bar supply!
        </div>
        <ul class="py-2">
          <li v-for="(category, index) in categories" :key="index">
            <a href="#" class="no-underline">{{ category }}</a>
          </li>
        </ul>
        <a href="#" class="
          inline-block p-2 px-4
          bg-blue-600
          text-white font-bold no-underline
          rounded-lg
          transform active:translate-y-1
        ">
          Bar Supplies
        </a>
        <img class="bottom-0 right-0 p-8 absolute" src="https://www.fillmurray.com/150/100" />
      </div>

      <div class="
        grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2
        md:col-span-2 xl:col-span-1
        gap-2 place-content-between
      ">
        <img v-for="index in 4"
          :key="index"
          src="https://www.fillmurray.com/300/250"
          class="rounded-lg shadow-md hover:shadow-xl duration-200"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',

    data() {
      return {
        categories: [
          'Beer Dispensers',
          'Bar Drink Mixes',
          'Glassware',
          'Restaurant Bar Stools'
        ],
        orders: [
          {
            number: '10013323',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Processing'
          },
          {
            number: '10013324',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          },
          {
            number: '10013325',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          },
          {
            number: '10013326',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Canceled'
          },
          {
            number: '10013327',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          },
          {
            number: '10013328',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          },
          {
            number: '10013329',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          },
          {
            number: '10013330',
            price: '$125.53',
            date: '1/1/2020',
            status: 'Shipped'
          }
        ]
      };
    }
  }
</script>

<style scoped>
  @screen md {
    .orders-list {
      @apply overflow-auto;
      height: 350px;
    }
  }
</style>
